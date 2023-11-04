import { vi } from 'vitest'

export const logger = {
  debug: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
} as any

export const validator = {
  validate: vi.fn((e) => ({ data: e })),
  rules: vi.fn((e) => validator)
} as any

export const validationError = (field:string) => {
  return {
    extra: [{
      code: "invalid_type",
      expected: "string",
      received: "null",
      path: [field],
      message: "Expected string, received null",
    }]
  }
}

export const handlerMock = (body: any) => {
  return {
    headers: {
      Authorization: `Basic 123456`
    },
    methodArn: '*',
    pathParameters: { id: '123-456' },
    body: JSON.stringify(body),
    // Records:[
    //   // SNS Example
    //   {
    //     "EventVersion": "1.0",
    //     "EventSubscriptionArn": "arn:aws:sns:EXAMPLE",
    //     "EventSource": "aws:sns",
    //     "Sns": {
    //       "SignatureVersion": "1",
    //       "Timestamp": "1970-01-01T00:00:00.000Z",
    //       "Signature": "EXAMPLE",
    //       "SigningCertUrl": "EXAMPLE",
    //       "MessageId": "12345",
    //       "Message": "{}",
    //       "MessageAttributes": {
    //         "Target": {
    //           "Type": "String",
    //           "Value": "Lambda"
    //         }
    //       },
    //       "Type": "Notification",
    //       "UnsubscribeUrl": "EXAMPLE",
    //       "TopicArn": "arn:aws:sns:EXAMPLE",
    //       "Subject": "sns:local"
    //     }
    //   }
    // ]
  }
}