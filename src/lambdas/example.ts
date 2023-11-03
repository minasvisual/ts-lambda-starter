import { env } from '@/config/env'
import Logger from '@/config/libs/Logger'
import Validator from '@/config/libs/Validator'
import PersonCtrl from '@/controllers/PersonController' 

export async function handler (event:any) {
  const body = JSON.parse(event.body)
  const logger = new Logger()
  const validator = new Validator(logger) 
  const person = new PersonCtrl({ logger, validator })
 
  const output = person.create(body) 

  return output
}