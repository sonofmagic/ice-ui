describe('type', () => {
  it('should ', () => {
    type BaseOptions<T extends string[] = string[]> = {
      themes: T
      selector: {
        [P in T[number]]: string
      }
      types: Record<
        string,
        {
          light: Record<string, string>
          dark: Record<string, string>
        }
      >
      extraVars: {
        light: Record<string, string>
        dark: Record<string, string>
      }
    }

    // const b: BaseOptions = {
    //   themes: ['light', 'dark'],
    //   selector: {}
    // }
  })
})
