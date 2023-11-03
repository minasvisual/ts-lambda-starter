import Person from '@/controllers/PersonController'
import { describe, expect, test } from 'vitest'

describe("Person class", () => { 

    test('Shoud return null with no name', () => {
      const person = new Person(null as any)

      expect(person.name).toEqual(null)
    })
    test('Shoud return instance with name', () => {
      const person = new Person('Boga azul')

      expect(person.name).toEqual('Boga azul')
    })
})