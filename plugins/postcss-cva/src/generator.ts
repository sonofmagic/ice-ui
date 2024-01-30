import * as t from '@babel/types'
import _babelGenerate from '@babel/generator'
import { defu } from '@icestack/shared'
// import type { VariantProps } from '@icestack/cva'
// https://github.com/babel/babel/issues/15269
function _interopDefaultCompat(e: any) {
  return e && typeof e === 'object' && 'default' in e ? e.default : e
}
export const babelGenerate = _interopDefaultCompat(_babelGenerate) as typeof _babelGenerate

function makeVariants(variants: Record<string, Record<string, string[]>>) {
  const properties = Object.entries(variants).map(([key, value]) => {
    return t.objectProperty(
      t.stringLiteral(key),
      t.objectExpression(
        Object.entries(value).map(([k, v]) => {
          return t.objectProperty(t.stringLiteral(k), t.arrayExpression(v.map((s) => t.stringLiteral(s))))
        })
      )
    )
  })
  return t.objectExpression(properties)
}

function makeCompoundVariants(compoundVariants: Record<string, string | string[]>[]) {
  return t.arrayExpression(
    compoundVariants.map((x) => {
      const entries = Object.entries(x)
      return t.objectExpression(
        entries.map(([k, v]) => {
          if (!Array.isArray(v)) {
            v = [v]
          }
          return t.objectProperty(
            t.stringLiteral(k),
            t.arrayExpression(
              v.map((x) => {
                return t.stringLiteral(x)
              })
            )
          )
        })
      )
    })
  )
}

function makeDefaultVariants(defaultVariants: Record<string, string>) {
  return t.objectExpression(
    Object.entries(defaultVariants).map(([key, value]) => {
      return t.objectProperty(t.stringLiteral(key), t.stringLiteral(value))
    })
  )
}

export function generateCva(options: {
  format?: 'js' | 'ts'
  importFrom?: string
  base: string[]
  variants: Record<string, Record<string, string[]>>
  compoundVariants: Record<string, string | string[]>[]
  defaultVariants: Record<string, string>
}) {
  const { base, compoundVariants, defaultVariants, format, importFrom, variants } = defu(options, {
    format: 'ts',
    importFrom: 'class-variance-authority',
    base: [],
    variants: {},
    compoundVariants: [],
    defaultVariants: {}
  })
  const isTs = format === 'ts'
  const cvaFnName = 'index'
  const body: t.Statement[] = []

  // import
  const specifiers: t.ImportSpecifier[] = [t.importSpecifier(t.identifier('cva'), t.identifier('cva'))]
  if (isTs) {
    specifiers.push(t.importSpecifier(t.identifier('VariantProps'), t.identifier('VariantProps')))
  }
  body.push(t.importDeclaration(specifiers, t.stringLiteral(importFrom)))
  // cva function
  body.push(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(cvaFnName),
        t.callExpression(t.identifier('cva'), [
          t.arrayExpression(base.map((x) => t.stringLiteral(x))),

          t.objectExpression([
            t.objectProperty(t.identifier('variants'), makeVariants(variants)),
            t.objectProperty(t.identifier('compoundVariants'), makeCompoundVariants(compoundVariants)),
            t.objectProperty(t.identifier('defaultVariants'), makeDefaultVariants(defaultVariants))
          ])
        ])
      )
    ])
  )
  // cva props
  if (isTs) {
    body.push(
      t.exportNamedDeclaration(
        t.typeAlias(
          t.identifier('Props'),
          null,
          t.genericTypeAnnotation(t.identifier('VariantProps'), t.typeParameterInstantiation([t.typeofTypeAnnotation(t.genericTypeAnnotation(t.identifier(cvaFnName)))]))
        )
      )
    )
  }

  body.push(t.exportDefaultDeclaration(t.identifier(cvaFnName)))
  const ast = t.file(t.program(body))
  return babelGenerate(ast)
}