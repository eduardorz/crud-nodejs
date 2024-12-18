import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential"


@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column({ select: false })
    password: string

    @Column()
    dni: number

    @Column()
    age: number

    @Column()
    phone: number

    @Column({ type: 'date' })
    birthday: Date;

    @Column()
    address: string

    @Column()
    city: string

    @Column()
    country: string

    @OneToOne(() => Credential, credential => credential.user, { cascade: true })
    @JoinColumn()
    credential: Credential

}