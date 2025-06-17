const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: 'dfg3q3jqr',
  api_key: '882832699475723',
  api_secret: 'LsXjeoYnU-NJj2oZipUMtRpiC6Y',
  secure: true
});

module.exports = cloudinary;
