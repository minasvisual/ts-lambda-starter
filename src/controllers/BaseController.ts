import { Logger } from "@/config/types/LoggerTypes";

export abstract class BaseController  {
  protected abstract name:string 
  constructor(protected readonly logger: Logger){} 
}