import { UserRole } from "../../types/enums/UserRole"
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
type UserId = string


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: true,
    })
    firstName: string

    @Column({
        nullable: true,
    }) lastName: string

    @Column({
        unique: true,
    })
    login: string

    @Column({
        unique: true,
    })
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.Admin,
    })
    role: UserRole

    // @Column()
    // createdBy: UserId
}
