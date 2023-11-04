import { env } from '@/config/env'
import { ValidationError } from '@/config/errors/ValidationError'
import { response } from '@/config/libs/Aws'
import Logger from '@/config/libs/Logger'
import Validator from '@/config/libs/Validator'
import PersonCtrl from '@/controllers/PersonController' 

export async function handler (event:any) {
  const logger = new Logger()
  const validator = new Validator(logger) 
  try {
    const body = JSON.parse(event.body)
    const person = new PersonCtrl({ logger, validator })
   
    const output = person.create(body) 
  
    return response(output)
  } catch ( error:any ) {
    logger.error('Handler error', error)
 
    return response(
      error,
      412
    )
  }
}