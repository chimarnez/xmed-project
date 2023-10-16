class ResourceError extends Error {
  err_type = 'RESOURCE'
  err_code = 400
  constructor(message, code) {
    super(message)
    this.err_code = code ?? this.err_code
  }
}

exports.ResourceError = ResourceError
