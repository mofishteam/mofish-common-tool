import { describe, it } from 'mocha'
import Main from '../src/index'
require('chai').should()

describe('IPC Module Test', () => {
  describe('IPC Server', () => {
    it('init', () => {
      const main = new Main()
      main.ipc.should.be.a('object')
    })
  })
})
