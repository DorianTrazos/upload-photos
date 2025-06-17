// const { uploadImage } = require('../../config/cloudinary');

const usersController = {};

usersController.createUser = async (req, res) => {
  console.log(req.body);

  const { name } = req.body;
  console.log(req.files?.image);

  if (!name) return res.status(400).json({ message: 'name is required' });

  res.end();
};

module.exports = usersController;
