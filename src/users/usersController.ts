import CredentialDto from "../credentials/credentialDto";
import { checkCredentialService } from "../credentials/credentialService";
import UserDto from "./userDto";
import { getUserByIdService, getUsersService, registerUserService } from "./usersService";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";


dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET!;

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


export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = parseInt(req.params.id, 10);  // Asegúrate de que el id es un número
      if (isNaN(userId)) {
        res.status(400).json({ message: "ID inválido" });
      }
  
      const user = await getUserByIdService(userId);
  
      if (!user) {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error interno del servidor", error });
    }
};

export const registerController = async (req: Request, res: Response) => {
    try {
        const { name, email, password, dni, age, phone, birthday, address, city, country }: UserDto = req.body;
        const newUser = await registerUserService({ 
            name, email, password, dni, age, phone, birthday, address, city, country 
        });
        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
        } else {
            res.status(500).json({ message: 'Error al registrar el usuario', error: 'Error desconocido' });
        }
    }
}
  
export const loginController = async (req: Request, res: Response) => {
    const { email, password }: CredentialDto = req.body;
    try {
        const credentialId = await checkCredentialService(email, password);
        const token = jwt.sign({ id: credentialId }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ message: 'Error en el inicio de sesión', error: error.message });
        } else {
            res.status(500).json({ message: 'Error en el inicio de sesión', error: 'Error desconocido' });
        }
    }
}