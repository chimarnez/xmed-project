const { ResourceError } = require('../exceptions/resource')

const { findByEmail, findByEmailLike } = require('../services/user')


exports.withUser = async function (req, res, next){
  try {
    const user = await findByEmailLike(req.body.email);
    if (user) {
      throw new ResourceError('User already exist', 407)
      next()
    }else{
      next()
    }
  } catch (error) {
    console.log('Generic error:', error.err_code);
    next(error);
  }
}