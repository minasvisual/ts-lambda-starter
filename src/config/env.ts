import 'dotenv/config' 

interface Env {
  NAME_TEST: string
}

export const env:Env = {
  'NAME_TEST': (process.env.NAME_TEST as string)
}