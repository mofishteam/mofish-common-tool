import { describe, it } from 'mocha'
import Main from '../src/index'
import { ipcRenderer } from 'electron'
require('chai').should()

describe('IPC Module Test', () => {
  describe('IPC Server', () => {
    const main = new Main()
    const server1 = new main.ipc.Server()
    it('Init', () => {
      main.ipc.should.be.an('object')
      // 注册server
      server1.set('/test-server-2')
    })
    it('Test Sync Request', () => {
      server1.set('/test-server-sync')
      server1.register()
      ipcRenderer.on('/test-server-sync-reply', (d) => {
        console.log(d)
      })
      ipcRenderer.send('/test-server-sync', { data: 'abc' })
    })
  })
})
