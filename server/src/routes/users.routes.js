const express = require('express');
const usersController = require('../controllers/users.controller');
const fileUpload = require('express-fileupload');

const userRoutes = express.Router();

userRoutes.post(
  '/',
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
  }),
  usersController.createUser
);

module.exports = userRoutes;
