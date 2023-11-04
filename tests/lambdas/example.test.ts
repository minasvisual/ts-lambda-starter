import { handler } from '@/lambdas/example'
import { beforeAll, describe, expect, test, vi } from 'vitest' 
import { handlerMock, validationError } from '../mocks/commons'
import { response } from '@/config/libs/Aws'


describe("Example lambda handler", () => {   

  test('Shoud test execution error', async () => {  
    const mockHandler = handlerMock({ 
      name: 'John Doe', document:null
    })
    const output = await handler(mockHandler)

    expect(output).toEqual({
      statusCode: 412,
      headers: {},
      body: JSON.stringify(
        validationError('document')
      )
    })
  })
  test('Shoud test execution sucess', async () => {  
    const mockHandler = handlerMock({ 
      name: 'John Doe', document:'123.456.789-00'
    })
    const output = await handler(mockHandler)

    expect(output).toEqual(
      response({ name:'JOHN DOE', document:'12345678900' })
    )
  })

})