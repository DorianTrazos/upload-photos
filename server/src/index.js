const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const path = require('path');
const connectDB = require('../config/db');
const userRoutes = require('./routes/users.routes');
const fileUpload = require('express-fileupload');

const corsOptions = {
  origin: '*', // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: '*' // Headers permitidos
};

app.use(cors(corsOptions));
app.use(fileUpload());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});

// PORT="3000"
// MONGODB_URL="mongodb+srv://dorianoriginaldesings:ow8uGojzVtq8R3UJ@mongo-trazos.5ahucgo.mongodb.net/users?retryWrites=true&w=majority&appName=mongo-trazos"
