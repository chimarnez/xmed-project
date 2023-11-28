const express = require('express')
const router = express.Router()
const { getFiles } = require('../controllers/files')
const upload = require('../middlewares/files')


router.post('/', upload.array('files', 1), getFiles)

module.exports = router
