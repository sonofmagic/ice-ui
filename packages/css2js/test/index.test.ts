import { css2js } from '@/index'

describe('index', () => {
  it('css2js case', async () => {
    const css = '.a{color:red;}'
    const expected = {
      '.a': {
        color: 'red'
      }
    }

    const obj = await css2js({
      css
    })
    expect(obj).toEqual(expected)
    // obj = css2jsSync({
    //   css
    // })
    // expect(obj).toEqual(expected)
  })
})
