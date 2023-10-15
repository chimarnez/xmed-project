const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
const {
  findById,
  findByIdWithPatient,
  findByIdWithDoctor
} = require('../services/user')

const strategyFactory = (cb) => {
  return async (payload, done) => {
    const { id } = payload
    try {
      const user = await cb(id)
      if (!user) {
        return done(new Error('User not found'), false)
      }
      done(null, user)
    } catch (error) {
      done(error)
    }
  }
}

passport.use(
  'jwt-common',
  new Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    strategyFactory(findById)
  )
)

passport.use(
  'jwt-patient',
  new Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    strategyFactory(findByIdWithPatient)
  )
)

passport.use(
  'jwt-doctor',
  new Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    strategyFactory(findByIdWithDoctor)
  )
)

exports.jwtValidator = passport.authenticate('jwt-common', { session: false })
exports.jwtValidatorPatient = passport.authenticate('jwt-patient', {
  session: false
})
exports.jwtValidatorDoctor = passport.authenticate('jwt-doctor', {
  session: false
})
