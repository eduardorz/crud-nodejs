import app from './server';
import bodyParser from "body-parser";
import {PORT} from "./config/envs"
import "reflect-metadata";
import { AppDataSource } from './config/data-source';

// app.use(bodyParser.json())

AppDataSource.initialize()
    .then(res => {
        console.log("Conexión a la base de datos realizada con éxito");
        app.listen(PORT, () => {
            console.log(`servidor escuchando en el puerto ${PORT}`);
            console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
        });
    })
