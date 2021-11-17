import { getSpacing } from '../spacing'

describe('spacing resolve', () => {
  it('get spacing', () => {
    const result = getSpacing(5)

    const expectedResult = ['0px', '8px', '16px', '24px', '32px', '40px']

    expect(result).toStrictEqual(expectedResult)

    expect(Object.assign({}, result)).toStrictEqual(Object.assign({}, expectedResult))
  })
})
