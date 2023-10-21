require("dotenv").config();
const AWS = require('aws-sdk');
const fs = require('fs');

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION
});

const s3 = new AWS.S3();

function uploadToS3(filename) {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filename);

    const params = {
      Bucket: 'zanomenuimages',
      Key: 'folder/' + filename.split('/').pop(), // Use filename as S3 key
      Body: fileContent
    };

    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location); // This will resolve the URL of the uploaded image
      }
    });
  });
}

module.exports = uploadToS3;
