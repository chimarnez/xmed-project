const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
const { findById } = require('../services/user')

passport.use(
  new Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (payload, done) => {
      const { id } = payload
      try {
        const user = await findById(id)
        if (!user) {
          return done(new Error('User not found'), false)
        }
        done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
)

module.exports = passport
