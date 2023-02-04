import { UserRole } from "../../types/enums/UserRole"

type UserId = string

export class User {
    userId: number
    firstName: string
    lastName: string
    login: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    role: UserRole
    createdBy: UserId
}
