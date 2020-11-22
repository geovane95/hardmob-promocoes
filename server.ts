import "reflect-metadata";
import { createConnection } from "typeorm";
import express from 'express';
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import cron from 'node-cron';
 
import config from './src/config/config'
import routes from './src/routes/routes'
import Jobs from "./src/jobs/Jobs";

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

		//Exemplo
		cron.schedule("* * * * *", () => console.log("Executando a tarefa a cada 1 minuto"));
		
		
		app.listen(port, () => {

			
			console.log(`Servidor rodando na porta ${port}`)
		});

		Jobs.execute();
	})
	.catch(error => console.log(error));