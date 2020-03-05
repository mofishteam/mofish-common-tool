import { ipcMain, ipcRenderer } from 'electron'
const ipc = ipcMain || ipcRenderer

export default class Server {
  constructor () {
    this.prefixUrl = ''
    this.ipcName = ''
    this.handler = () => {}
  }

  prefix (url) {
    this.prefixUrl = url
  }

  async set (url, handler) {
    this.ipcName = this.prefixUrl + url
    this.handler = handler
  }

  register () {
    ipc.on(this.ipcName, async (e, args) => {
      console.log(args)
      e.reply(`${e}-reply`, 123)
      e.returnValue = await this.handler(args)
    })
  }
}
