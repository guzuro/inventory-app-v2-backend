import { UserRole } from "../../types/enums/UserRole"
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique } from 'typeorm';
type UserId = string


@Entity()
export class User {
    @PrimaryGeneratedColumn({
        primaryKeyConstraintName: 'id'
    })
    id: number

    @Column({
        nullable: true,
    })
    firstName: string

    @Column({
        nullable: true,
    }) lastName: string

    @Unique('login', ['login'])
    @Column()
    login: string

    @Unique('email', ['email'])
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
