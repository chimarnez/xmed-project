const express = require('express')
const router = express.Router()
const {
  createUser,
  getUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
  getUserRole,
  uploadUserProfilePicture
} = require('../controllers/user')
const validator = require('../middlewares/validator')
const { jwtValidator } = require('../middlewares/jwt')
const { createUserSchema, updateUserSchema } = require('../validations/user')
const { withUser } = require('../middlewares/user')
const upload = require('../middlewares/files')

router.post('/', withUser, validator.body(createUserSchema), createUser)
router.get('/profile', jwtValidator, getUser)
router.get('/', jwtValidator, getUserById)
router.get('/', jwtValidator, getUsers)
router.patch('/', jwtValidator, validator.body(updateUserSchema), updateUser)
router.delete('/', jwtValidator, deleteUser)
router.post('/profile-picture', jwtValidator, upload.single('profilePicture'), uploadUserProfilePicture)

router.get('/role', jwtValidator, getUserRole)

module.exports = router
