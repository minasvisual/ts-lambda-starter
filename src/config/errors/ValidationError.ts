
export class ValidationError extends Error {
  readonly extra: object | undefined
  constructor(message: string, extra?: object | undefined){
    super(`Validation Error - ${message}`)
    this.extra = extra
  }
}