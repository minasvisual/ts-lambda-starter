import { env } from '@/config/env'
import Person from '@/controllers/Person'

export async function handler (event:any) {
  const person = new Person(env.NAME_TEST)
  
  console.log(person) 
  return person.name
}