import { ValidationError } from "../errors/ValidationError";
import { ValidatorContract } from "../interfaces/ValidatorContract";
import Logger from "./Logger";
import { z } from 'zod'

export default class Validator implements ValidatorContract {
  protected schema: z.Schema | undefined
  constructor (private readonly logger: Logger){  }

  rules(schema: z.Schema){
    this.schema = schema
    return this
  }

  validate(payload: object | undefined) {
    this.logger.debug('[Validator] started', payload)
    if( !this.schema ) throw new Error('Schema not defined')
    const output = this.schema.safeParse(payload)
    if( !output.success ){
      this.logger.warn('[Validator] invalid data', {
        issues: output.error.issues,
        errors: output.error.errors
      })
      throw new ValidationError(output.error.message, {
        issues: output.error.issues,
        errors: output.error.errors
      })
    }
    return output
  }
}