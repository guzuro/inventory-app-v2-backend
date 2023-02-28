import { UserRole } from "../../types/enums/UserRole"
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
    @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'id' })
    id: number

    @Column({ nullable: true, })
    firstName: string

    @Column({ nullable: true, })
    lastName: string

    @Unique('UQ_login', ['login'])
    @Column()
    login: string

    @Unique('UQ_email', ['email'])
    @Column()
    email: string

    @Column()
    @Exclude()
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
