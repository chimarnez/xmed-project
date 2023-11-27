const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3Client({
  region,
  bucketName,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
})


// exports.upload =  multer(
//     {
//     storage: multerS3({
//       s3: s3,
//       bucket: 'xhr-bucket',
//       metadata: function (req, files, cb) {
//         console.log(files)
//         cb(null, {fieldName: files.fieldname});
//       },
//       key: function (req, files, cb) {
//         try {
//             cb(null, Date.now().toString())
//         } catch (error) {
//             console.error(error);
//         }
//       }
//     })
//   }
// )


exports.upload = () => {
    const file = req.file 
    const caption = req.body.caption

    const fileBuffer = await sharp(file.buffer)
        .resize({ height: 1920, width: 1080, fit: "contain" })
        .toBuffer()
}