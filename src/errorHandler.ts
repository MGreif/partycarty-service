import { logger } from "./config/logger"

class HttpError extends Error {  
  statusCode: number
  constructor (statusCode = 500, message = 'An Error Occurred') {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

class NotFoundError extends Error {
  statusCode: number
  constructor (ressource = '') {
    super()
    this.message = 'The requested ressource could not be found: ' + ressource
    this.statusCode = 404
  }
}

type TField = {
  name: string,
  message: string
}

class BadFieldsError extends Error {
  statusCode: number
  fields: TField[]
  constructor (fields: TField[]) {
    super()
    this.message = 'The passed fields are invalid'
    this.fields = fields
    this.statusCode = 400
  }
}


// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  logger.error('[REQUEST-ERROR]', error)
  if (error instanceof BadFieldsError) {
    res.status(error.statusCode)
      .json({ success: false, error: error.message, fields: error.fields })
  }
  res.status(error.statusCode || 500).json({ success: false, error: error.message })
}

export { HttpError, NotFoundError, errorHandler }