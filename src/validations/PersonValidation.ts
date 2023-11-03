import { z } from 'zod'

export const createRules = z.object({
  name: z.string().toUpperCase(),
  document: z.string().transform((val) => val.replace(/\D/g, ''))
})