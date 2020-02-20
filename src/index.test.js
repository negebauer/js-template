const { foo, bar } = require('.')

describe('index', () => {
  describe('foo', () => {
    it('returns bar', () => {
      expect(foo()).toEqual('bar')
    })
  })

  describe('bar', () => {
    it('returns 1', () => {
      expect(bar()).toEqual(1)
    })
  })
})
