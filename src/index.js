import '@babel/polyfill'
import electronObject from 'electron'
import Client from './ipc/client'
import Server from './ipc/server'

const ipc = {
  Client,
  Server,
  client: Client,
  server: Server
}

export default class Tool {
  constructor ({ electron } = {}) {
    this.electron = electron || electronObject
    this.ipc = ipc
  }
}

export {
  ipc
}
