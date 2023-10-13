require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const app = express()

const { initDatabase } = require('./db')
const openApiConfig = require('./docs/swagger')
initDatabase()

app.use(express.json())
app.use('/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(openApiConfig))

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
