const express = require('express')
const router = express.Router()
const {
  createUser,
  getUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/user')
const validator = require('../middlewares/validator')
const { jwtValidator } = require('../middlewares/jwt')
const { createUserSchema, updateUserSchema } = require('../validations/user')

router.post('/', validator.body(createUserSchema), createUser)
router.get('/profile', jwtValidator, getUser)
router.get('/', jwtValidator, getUserById)
router.get('/', jwtValidator, getUsers)
router.patch('/', jwtValidator, validator.body(updateUserSchema), updateUser)
router.delete('/', jwtValidator, deleteUser)

module.exports = router
