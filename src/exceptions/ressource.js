class RessourceError extends Error {
  err_type = 'RESSOURCE'
  err_code = 400
  constructor(message, code) {
    super(message)
    this.err_code = code ?? this.err_code
  }
}

exports.RessourceError = RessourceError
