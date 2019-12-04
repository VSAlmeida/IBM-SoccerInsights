const router = require("express").Router()
const multer = require("multer");
const multerS3 = require("multer-s3");
const bucket = "projetofinal";
const cos = require("../config/cos");


const upload = multer({
  storage: multerS3({
    s3: cos,
    bucket: bucket,
    metadata: function (req, file, cb) {
        cb(null, {fieldName: file.originalname});
    },
    key: function (req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
  })
});

router.post('/file', upload.single('file'), function(req, res, next) {
  fileBuffer = req.file.key

    function getItem() {
      console.log(`Retrieving from bucket: ${bucket}, key: ${fileBuffer}`);
      return cos.getObject({
          Bucket: bucket,
          Key: fileBuffer
        }).promise()
          .then((data) => {
            if (data != null) {
              content = Buffer.from(data.Body).toString()
              res.status(201).json({
                message: 'Buffer',
                content: content
              });
            }
          })
        .catch((e) => {
          console.error(`ERROR: ${e.code} - ${e.message}\n`);
        });
    }
    // chamada da função passando o bucket e a key como parâmetro
    getItem(bucket, fileBuffer);
    console.log('Successfully uploaded ')
  })

module.exports = router