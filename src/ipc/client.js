import { ipcMain, ipcRenderer } from 'electron'
const ipc = ipcMain || ipcRenderer
let requestId = 1
// let isInited = false
// const ipc = window.electron.ipc
export default class Client {
  request (url, data = {}, { sync, timeout = 60000 } = {}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Request Timeout'))
      }, timeout)
      if (sync) {
        const result = ipc.sendSync(url, { data })
        // console.log(`ipc request -- url(${url}), result(${result})`)
        resolve(result)
      } else {
        requestId++
        console.log(url, { data, requestId })
        ipc.send(url, { data, requestId })
        ipc.once(`${url}-reply-${requestId}`, (evt, args) => {
          // console.log(`${url}-reply-${requestId}`, args)
          resolve(args)
        })
      }
    })
  }
}
