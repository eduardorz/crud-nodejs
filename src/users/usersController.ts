import { getUsersService } from "./usersService";
import { Request, Response } from 'express';


/**
 * Controlador para obtener la lista de usuarios
 * @swagger
 * components:
 *   responses:
 *     UsersList:
 *       description: Lista de usuarios retornada con éxito
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/User'
 */
export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService(); 
        res.status(200).json(users)
    } catch (error: any) {
        res.status(404).json({ error: error.message || 'Error al obtener usuarios' });
    }
}