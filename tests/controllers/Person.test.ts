import Person from '@/controllers/PersonController'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { logger } from '../mocks/commons' 
import { ValidationError } from '@/config/errors/ValidationError'
import Validator from '@/config/libs/Validator'
 

describe("Person class", () => { 
    let secretTest: string 
    let instance: Person
    let validator: any

    beforeAll(() => {
      secretTest = process.env.APP_ENV === 'prod' ? '123prod456prod':'123pin456pin'
      validator = new Validator(logger)
      instance = new Person({
        logger,
        validator 
      }) 
    })

    test('Shoud throw with invalid body', () => {   
      try {
        instance.create({ name: 'jose' } as any)
      } catch (error:any) {
        expect(error).instanceOf(ValidationError)
        expect(error.message).toBeTypeOf('string')
        expect(error.extra.errors).toEqual([{ 
          "code": "invalid_type",
          "expected": "string",
          "message": "Required",
          "path": ["document"],
          "received": "undefined",
        }])
      }
    })
    test('Shoud return instance with name', () => { 
      let output = instance.create({ 
        name: 'jose', 
        document:'123.456.789-01' 
      } as any)
      console.log('env', process.env.TEST_SECRET)
      expect(output.name).toEqual('JOSE')
      expect(output.document).toEqual('12345678901')
      expect(process.env.TEST_SECRET).toEqual(secretTest)
    })
})