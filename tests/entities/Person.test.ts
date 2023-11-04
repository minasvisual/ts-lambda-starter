import { Person } from '@/entities/Person'
import { beforeAll, describe, expect, test, vi } from 'vitest' 
  
describe("Person entity", () => {   
 
    test('Shoud entity creation cpf', () => { 
      const input = { name:'John Doe', document:'12345678900' }
      const output = new Person(input)

      expect(output.input).toEqual(input)
      expect(output.isCpf()).toEqual(true)
      expect(output.isCnpj()).toEqual(false)
    })

    test('Shoud entity creation cnpj', () => { 
      const input = { name:'John Doe', document:'12345678000100' }
      const output = new Person(input)

      expect(output.input).toEqual(input)
      expect(output.isCpf()).toEqual(false)
      expect(output.isCnpj()).toEqual(true)
    })

})