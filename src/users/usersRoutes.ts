import { Router } from "express";
import { getUserByIdController, getUsersController, loginController, registerController } from "./usersController";

const usersRouter = Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID único del usuario
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Nombre del usuario
 *                     example: Carlos Ramírez
 *                   email:
 *                     type: string
 *                     description: Correo electrónico del usuario
 *                     example: carlos.ramirez@example.com
 *                   dni:
 *                     type: integer
 *                     description: Documento Nacional de Identidad del usuario
 *                     example: 56781234
 *                   age:
 *                     type: integer
 *                     description: Edad del usuario
 *                     example: 35
 *                   phone:
 *                     type: string
 *                     description: Número de teléfono del usuario
 *                     example: 4121111111
 *                   birthday:
 *                     type: string
 *                     format: date
 *                     description: Fecha de nacimiento del usuario
 *                     example: 1989-09-10
 *                   address:
 *                     type: string
 *                     description: Dirección del usuario
 *                     example: Av. Libertador 789
 *                   city:
 *                     type: string
 *                     description: Ciudad del usuario
 *                     example: Maracaibo
 *                   country:
 *                     type: string
 *                     description: País del usuario
 *                     example: Venezuela
 *       404:
 *         description: No hay usuarios registrados
 */
usersRouter.get('/', getUsersController);


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del usuario que se desea obtener
 *         required: true
 *         schema:
 *           type: integer
 *           example: 3
 *     responses:
 *       200:
 *         description: Usuario encontrado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID único del usuario
 *                   example: 3
 *                 name:
 *                   type: string
 *                   description: Nombre del usuario
 *                   example: Carlos Ramírez
 *                 email:
 *                   type: string
 *                   description: Correo electrónico del usuario
 *                   example: carlos.ramirez@example.com
 *                 dni:
 *                   type: integer
 *                   description: Documento Nacional de Identidad del usuario
 *                   example: 56781234
 *                 age:
 *                   type: integer
 *                   description: Edad del usuario
 *                   example: 35
 *                 phone:
 *                   type: string
 *                   description: Número de teléfono del usuario
 *                   example: 4121111111
 *                 birthday:
 *                   type: string
 *                   format: date
 *                   description: Fecha de nacimiento del usuario
 *                   example: 1989-09-10
 *                 address:
 *                   type: string
 *                   description: Dirección del usuario
 *                   example: Av. Libertador 789
 *                 city:
 *                   type: string
 *                   description: Ciudad del usuario
 *                   example: Maracaibo
 *                 country:
 *                   type: string
 *                   description: País del usuario
 *                   example: Venezuela
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
usersRouter.get('/:id', getUserByIdController);

usersRouter.post('/register', registerController);

usersRouter.post('/login', loginController);





export default usersRouter;