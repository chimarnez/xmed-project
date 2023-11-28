const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
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


const upload = multer(
    {    
    storage: multerS3({
      s3,
      region,
      bucket: bucketName,
      metadata: function (req, files, cb) {
        cb(null, {fieldName: files.originalname});
      },
      key: function (req, files, cb) {
            const fileExtension = files.originalname.split('.').pop();
            cb(null, Date.now().toString()+"."+fileExtension)
      }
    })
  }
)


module.exports = upload;