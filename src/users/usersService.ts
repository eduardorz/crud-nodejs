import { UserModel } from "../config/data-source";
import { createCredentials } from "../credentials/credentialService";
import { User } from "../entities/User";
import UserDto from "./userDto";
import bcrypt from 'bcrypt';


export const getUsersService = async (): Promise<User[]> => {
    const users: User[] = await UserModel.find();
    if (users.length === 0) throw new Error(`De momento no hay usuarios registrados ...`);
    return users;
}

export const getUserByIdService = async (id: number) => {
    return await UserModel.findBy({id});
}

export const registerUserService = async (usersData: UserDto) => {
    const { email, password } = usersData;
    const foundUser = await UserModel.findOneBy({ email });
    if (foundUser) return { message: "Este usuario ya existe" };
    const hashedPassword = await bcrypt.hash(password, 10);
    usersData.password = hashedPassword
    const newCredential = await createCredentials(usersData.email, usersData.password);
    const newUser = UserModel.create(usersData);
    newUser.credential = newCredential;
    await UserModel.save(newUser);
    return newUser;
}