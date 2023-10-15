require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const app = express()

const { initDatabase } = require('./db')
const openApiConfig = require('./docs/swagger')
initDatabase()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiConfig))

// routers
const userRouter = require('./routers/user')
const doctorRouter = require('./routers/doctor')
const patientRouter = require('./routers/patient')
const recordRouter = require('./routers/record')
const authRouter = require('./routers/auth')

const validationError = require('./middlewares/validation-error')
const ressourceError = require('./middlewares/ressource-error')
const { jwtValidatorPatient, jwtValidatorDoctor } = require('./middlewares/jwt')

// Routes
app.use('/users', userRouter)
app.use('/patients', jwtValidatorPatient, patientRouter)
app.use('/doctors', jwtValidatorDoctor, doctorRouter)
app.use('/records', recordRouter)
app.use('/auth', authRouter)

// Error handler
app.use(ressourceError)
app.use(validationError)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`> Listening in port :${process.env.SERVER_PORT}`)
})
