require('dotenv').config()
const express = require('express')
const app = express()

const { initDatabase } = require('./db')
initDatabase()

app.use(express.json())

// routers
const userRouter = require('./routers/user')
const doctorRouter = require('./routers/doctor')
const patientRouter = require('./routers/patient')
const recordRouter = require('./routers/record')
const authRouter = require('./routers/auth')

const validationError = require('./middlewares/validation-error')

// Routes
app.use('/users', userRouter)
app.use('/patients', patientRouter)
app.use('/doctors', doctorRouter)
app.use('/records', recordRouter)
app.use('/auth', authRouter)

// Error handler
app.use(validationError)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`> Listening in port :${process.env.SERVER_PORT}`)
})
