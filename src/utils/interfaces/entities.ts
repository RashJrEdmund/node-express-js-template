import { ObjectId } from "mongoose";

export interface IUSER {
    _id?: string,
    username: string,
    email: string,
    password: string,
    createdAt?: string,
    updatedAt?: string,
}
