import { vi } from 'vitest'

export const logger = {
  debug: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
} as any

export const validator = {
  validate: vi.fn((e) => ({ data:e }) ),
  rules: vi.fn((e) => validator)
} as any