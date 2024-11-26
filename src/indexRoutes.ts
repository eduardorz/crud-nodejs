/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints relacionados con usuarios
 */

import { Router } from "express";
import usersRouter from "./users/usersRoutes";


const router: Router = Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Ruta principal para los usuarios
 *     tags: [Users]
 *     description: Redirige a las operaciones relacionadas con usuarios.
 */
router.use('/users', usersRouter);


export default router;