import { LoggerContract } from "../interfaces/LoggerContract";
 
export default class Logger implements LoggerContract {
    constructor(){}
    info(...args:any){
      console.info(...args)
    }
    debug(...args:any){
      console.debug(...args)
    }
    error(...args:any){
      console.error(...args)
    }
    warn(...args:any){
      console.warn(...args)
    }
}