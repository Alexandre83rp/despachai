const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/despachai';

app.use(express.json());

app.get('/', (req, res) => res.send('API funcionando!'));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
  app.listen(PORT, () => console.log(`Backend ouvindo na porta ${PORT}`));
}).catch(err => console.error('Erro ao conectar no MongoDB:', err));

