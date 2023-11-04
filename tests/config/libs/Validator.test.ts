
import Validator from '@/config/libs/Validator'
import { logger } from '@/tests/mocks/commons'
import { beforeAll, describe, expect, test, vi } from 'vitest' 

describe("Validator lib", () => {  
  let instance: Validator

  beforeAll(() => {  
    instance = new Validator(logger) 
  })

  test('Shoud test validate with no schema', () => {
    try {
      instance.validate({ teste:'no ok' })
    } catch (error) {
      expect(error).toEqual(new Error('Schema not defined'))
    }
  })
 
  //
})