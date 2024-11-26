import express from "express";
import cors from 'cors';
import router from "./indexRoutes";
import { swaggerDocs, swaggerUi } from "./config/swagger.config";


const app = express();


app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(router);

export default app;