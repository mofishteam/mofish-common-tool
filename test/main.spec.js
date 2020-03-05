import { describe, it } from 'mocha'
import Main from '../src/index'
import electron from 'electron'
require('chai').should()

describe('Main Module Test', () => {
  describe('Common', () => {
    const mainWithoutElectron = new Main()
    const mainWithElectron = new Main({ electron })
    it('Type Test', () => {
      mainWithoutElectron.should.be.a('object')
      mainWithoutElectron.electron.should.be.a('object')
      mainWithElectron.electron.should.be.a('object')
    })
  })
})
