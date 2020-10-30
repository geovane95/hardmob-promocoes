import express from 'express';

import config from './src/config/config'
import routes from './src/routes/routes'

const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const port = config.server.port;


app.use(routes);



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});