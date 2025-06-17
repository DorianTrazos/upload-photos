const fs = require('fs');
const path = require('path');

const usersController = {};

usersController.createUser = async (req, res) => {
  try {
    const body = req.body ? { ...req.body } : {};
    const files = req.files ? { ...req.files } : {};

    const { name } = body;
    const image = files.image;

    if (!name) return res.status(400).json({ message: 'Falta el nombre' });
    if (!image) return res.status(400).json({ message: 'Falta la imagen' });

    // Carpeta donde guardar
    const uploadDir = path.join(__dirname, '../uploads');

    // Si no existe, la creamos
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Ruta final del archivo
    const fileName = `${Date.now()}_${image.name}`;
    const filePath = path.join(uploadDir, fileName);

    // Guardar el archivo
    await image.mv(filePath);

    res.json({
      message: 'Imagen guardada correctamente',
      fileName,
      filePath: `/uploads/${fileName}`
    });
  } catch (error) {
    console.error('Error al guardar imagen:', error);
    res.status(500).json({ message: 'Error al guardar la imagen' });
  }
};

module.exports = usersController;
