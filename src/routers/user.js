const express = require('express')
const router = express.Router()
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/user')
// const { createUserAndPatientSchema } = require("../validations/user");
const validator = require('../middlewares/validator')
const { createUserSchema, updateUserSchema } = require('../validations/user')

router.post('/', validator.body(createUserSchema), createUser)
router.get('/:id', getUser)
router.get('/', getUsers)
router.put('/:id', validator.body(updateUserSchema), updateUser)
router.delete('/:id', deleteUser)

module.exports = router
