import "reflect-metadata";
import { createConnection } from "typeorm";
import express from 'express';
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

import config from './src/config/config'
import routes from './src/routes/routes'

const port = config.server.port;

createConnection()
	.then(async connection => {
		// Create a new express application instance
		const app = express();

		app.use(express.json());

		// Call midlewares
		app.use(cors());
		app.use(helmet());
		app.use(bodyParser.json());

		//Set all routes from routes folder
		app.use("/", routes);

		app.listen(port, () => {
			console.log(`Servidor rodando na porta ${port}`)
		});
	})
	.catch(error => console.log(error));