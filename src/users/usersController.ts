import { getUsersService } from "./usersService";
import { Request, Response } from 'express';



export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService(); 
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}