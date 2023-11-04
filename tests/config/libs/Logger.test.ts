import Logger from '@/config/libs/Logger'
import { beforeAll, describe, expect, test, vi } from 'vitest' 

describe("Logger lib", () => {  
  let instance: Logger

  beforeAll(() => {  
    instance = new Logger() 
  })

  test('Shoud test debug', () => {   
    const mockDebug = vi.spyOn(console, 'debug')
    instance.debug('test debug', { message:'ok' })
    expect(mockDebug).toHaveBeenCalledTimes(1)
    expect(mockDebug).toHaveBeenCalledWith('test debug', {message:'ok'})
  })

  test('Shoud test info', () => {   
    const mockDebug = vi.spyOn(console, 'info')
    instance.info('test info', { message:'ok' })
    expect(mockDebug).toHaveBeenCalledTimes(1)
    expect(mockDebug).toHaveBeenCalledWith('test info', {message:'ok'})
  })

  test('Shoud test warn', () => {   
    const mockDebug = vi.spyOn(console, 'warn')
    instance.warn('test warn', { message:'ok' })
    expect(mockDebug).toHaveBeenCalledTimes(1)
    expect(mockDebug).toHaveBeenCalledWith('test warn', {message:'ok'})
  })

  test('Shoud test error', () => {   
    const mockDebug = vi.spyOn(console, 'error')
    instance.error('test error', { message:'ok' })
    expect(mockDebug).toHaveBeenCalledTimes(1)
    expect(mockDebug).toHaveBeenCalledWith('test error', {message:'ok'})
  })
  //
})