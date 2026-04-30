const { AppError } = require('../exceptions')

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    errorCode: err.errorCode,
    error: err,
    stack: err.stack
  })
}

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      errorCode: err.errorCode
    })
  } else {
    // Programming or other unknown error: don't leak error details
    console.error('ERROR 💥', err)
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
      errorCode: 'INTERNAL_ERROR'
    })
  }
}

const handleJoiValidationError = (err) => {
  const message = err.error.details.map((el) => el.message).join('. ')
  const details = {}
  err.error.details.forEach((e) => {
    details[e.context.key] = e.message
  })
  const error = new AppError(message, 400, 'VALIDATION_ERROR')
  error.data = details
  return error
}

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'
  err.errorCode = err.errorCode || 'INTERNAL_ERROR'

  let error = { ...err }
  error.message = err.message
  error.stack = err.stack

  // Handle Joi Validation Errors (express-joi-validation)
  if (err.error?.isJoi) error = handleJoiValidationError(err)

  // Handle Sequelize errors (Optional but recommended)
  if (err.name === 'SequelizeUniqueConstraintError') {
    error = new AppError('Value already exists', 409, 'CONFLICT')
  }

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(error, res)
  } else {
    sendErrorProd(error, res)
  }
}
