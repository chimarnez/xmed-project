const express = require('express')
const router = express.Router()
const { getFiles } = require('../controllers/files')
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const multer = require('multer')
const sharp = require('sharp')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const crypto = require('crypto')

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

const s3 = new S3Client({
  region,
  bucketName,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
})

router.post('/', upload.single('files'), async (request, response) => {
    const file = request.file 
    const caption = request.body.caption
  
    const fileBuffer = await sharp(file.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer()
  
    // Configure the upload details to send to S3
    const fileName = generateFileName()
    const fileOriginalName = file.originalname
    const uploadParams = {
      Bucket: bucketName,
      Body: fileBuffer,
      Key: fileName+fileOriginalName,
      ContentType: file.mimetype
    }
  
    await s3.send(new PutObjectCommand(uploadParams));
    response.status(200).json({
        "message":'Successfully uploaded ',
        "file": fileOriginalName
    })
})

module.exports = router