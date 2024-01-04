import path from 'node:path'
import { getRules } from '@/rules'
const loadDirectory = path.resolve(__dirname, '../my-ui')
describe('index', () => {
  it('getRules default', () => {
    const a: string[] = []
    const options = getRules(loadDirectory, a)
    expect(options).toMatchSnapshot()
    expect(a).toMatchSnapshot('keyframes')
  })

  it('getRules get tab', () => {
    const a: string[] = []
    const options = getRules(loadDirectory, a)
    expect(options.find((x) => x[0] === 'tab')).toMatchSnapshot()
    expect(a).toMatchSnapshot('keyframes')
  })
})
