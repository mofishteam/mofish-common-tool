import { describe, it } from 'mocha'
require('chai').should()

describe('Hello World!', () => {
  describe('Oh My God!', () => {
    it('it is a shame!', () => {
      'abc'.should.be.a('string');
      (123).should.be.a('string')
    })
  })
})
