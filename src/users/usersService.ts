import { UserModel } from "../config/data-source";
import { User } from "../entities/User";


export const getUsersService = async (): Promise<User[]> => {
    const users: User[] = await UserModel.find();
    if (users.length === 0) throw new Error(`De momento no hay usuarios registrados ...`);
    return users;
}