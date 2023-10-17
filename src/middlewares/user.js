const { ResourceError } = require('../exceptions/resource')

const { findByEmail } = require('../services/user')


exports.withUser = async function (req, res, next) {
  const user = await findByEmail(req.body.email);
  try {
    if (user) {
      res.status(407).json({ error: 'User already exists' });
    }
  } catch (error) {
    if (error instanceof ResourceError) {
      console.log('Generic error:', error.err_code);
      next(error);
    } else {
      next(error);
    }
  }
}