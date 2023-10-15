module.exports = function (err, req, res, next) {
  if (err?.err_type !== 'RESSOURCE') {
    return next(err)
  }
  res.status(err.err_code).send({ error: { message: err.message } })
}
