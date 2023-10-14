function getErrors(details) {
  const err = {}
  for (const e of details) {
    err[e.context.key] = e.message
  }
  return { error: err }
}

module.exports = function (err, req, res, next) {
  if (err && err.error.isJoi) {
    console.error(err)
    res.status(400).json(getErrors(err.error.details))
    // res.status(400).json({
    //   type: err.type,
    //   message: err.error.toString(),
    //   details: err.error.details,
    // });
  } else {
    next(err)
  }
}
