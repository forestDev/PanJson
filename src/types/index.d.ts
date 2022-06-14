export {};

interface IpcInterface {
    on: (eventName: String, payload: any) => void,
    send: (eventName: String, payload: any) => void
}

declare global {
    interface Window {
        ipc: IpcInterface,
    }
  }