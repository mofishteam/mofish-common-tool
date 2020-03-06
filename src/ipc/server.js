import { ipcMain } from 'electron'

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
    ipcMain.on(this.ipcName, async (e, args) => {
      console.log(args)
      e.reply(`${e}-reply`, this.handler(args))
      e.returnValue = await this.handler(args)
    })
  }
}
