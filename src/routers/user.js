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
// const { createUserAndPatientSchema } = require("../validations/user");
const validator = require('../middlewares/validator')
const { jwtValidator } = require('../middlewares/jwt')
const { createUserSchema, updateUserSchema } = require('../validations/user')

router.post('/', validator.body(createUserSchema), createUser)
router.get('/profile', jwtValidator, getUser)
// 1. Should not return hashed password
router.get('/', jwtValidator, getUserById)
router.get('/', jwtValidator, getUsers)
router.put('/', jwtValidator, validator.body(updateUserSchema), updateUser)
router.delete('/', jwtValidator, deleteUser)

module.exports = router
