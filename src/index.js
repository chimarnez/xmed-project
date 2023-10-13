require('dotenv').config()
const express = require('express')
const app = express()

const { initDatabase } = require('./db')
initDatabase()

app.use(express.json())

const userRouter = require('./routers/user')
const authRouter = require('./routers/auth')

const validationEerror = require('./middlewares/validation-error')

// Routes
app.use(userRouter)
app.use('/auth', authRouter)

// Error handler
app.use(validationEerror)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`> Listening in port :${process.env.SERVER_PORT}`)
})
