
export interface LoggerContract {
  info: (message: string, payload?: object) => void
  error: (message: string, payload?: object) => void
  warn: (message: string, payload?: object) => void
  debug: (message: string, payload?: object) => void 
}