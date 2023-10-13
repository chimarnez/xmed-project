function getErrors(details) {
  return { errors: details.map((err) => err.message) };
}

module.exports = function (err, req, res, next) {
  if (err && err.error.isJoi) {
    console.error(err);
    res.status(400).json(getErrors(err.error.details));
    // res.status(400).json({
    //   type: err.type,
    //   message: err.error.toString(),
    //   details: err.error.details,
    // });
  } else {
    next(err);
  }
};
