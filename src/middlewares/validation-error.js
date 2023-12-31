function getErrors(details) {
  const err = {}
  for (const e of details) {
    err[e.context.key] = e.message
  }
  return { error: err }
}

module.exports = function (err, req, res, next) {
  if (err) {
    console.error(err)
    res.status(400).json(getErrors(err.error.details))
  } else {
    next(err)
  }
}
