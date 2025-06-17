const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'cloud_dorian',
  api_key: '882832699475723',
  api_secret: 'LsXjeoYnU-NJj2oZipUMtRpiC6Y',
  secure: true
});

const uploadImage = async filePath => {
  await cloudinary.uploader.upload(filePath, { folder: 'uploads' });
};

module.exports = uploadImage;
