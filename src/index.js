import '@babel/polyfill'
import electronObject from 'electron'

const ipc = {
  client: require('./ipc/client'),
  server: require('./ipc/server')
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
