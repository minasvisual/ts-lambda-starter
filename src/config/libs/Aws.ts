 
export const response = (body: object|any[], statusCode = 200, headers:any = {}) => {
  return {
    statusCode, 
    headers,
    body: JSON.stringify(body)
  }
}