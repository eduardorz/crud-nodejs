
import bcrypt from 'bcrypt';
import { CredentialModel } from '../config/data-source';


export const createCredentials = async (email: string, password: string) => {
    try {
        const newCredential = CredentialModel.create({
            email,
            password,
        });
        await CredentialModel.save(newCredential);
        return newCredential;
    } catch (error) {
        throw new Error('Error al crear las credenciales');
    }
}

export const checkCredentialService = async (email: string, password: string) => {
    const credential = await CredentialModel.findOne({ where: { email } });
    if (!credential) throw new Error("Las credenciales no son correctas");
    const isPasswordValid = await bcrypt.compare(password, credential.password);
    if (!isPasswordValid) throw new Error("Las credenciales no son correctas");
    return credential.id;
}