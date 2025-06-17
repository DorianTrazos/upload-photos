const fs = require('fs');
const path = require('path');
const cloudinary = require('../../config/cloudinary');

const usersController = {};

usersController.createUser = async (req, res) => {
  try {
    const body = req.body ? { ...req.body } : {};
    const files = req.files ? { ...req.files } : {};

    const { name } = body;
    const image = files.image;

    if (!name) return res.status(400).json({ message: 'Falta el nombre' });
    if (!image) return res.status(400).json({ message: 'Falta la imagen' });

    // Crear carpeta si no existe
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Guardar temporalmente
    const tempPath = path.join(uploadDir, `${Date.now()}_${image.name}`);
    await image.mv(tempPath);

    // Subir a Cloudinary
    const result = await cloudinary.uploader.upload(tempPath, {
      folder: 'users',
      use_filename: true,
      unique_filename: false
    });

    // Eliminar el archivo local
    fs.unlinkSync(tempPath);

    res.json({
      message: 'Imagen subida correctamente a Cloudinary',
      url: result.secure_url,
      public_id: result.public_id,
      name
    });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    res.status(500).json({ message: 'Error al subir la imagen' });
  }
};

module.exports = usersController;
