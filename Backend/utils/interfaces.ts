import {Document} from "mongoose"

export interface iUser{
    userName: string
    email: string
    password: string;
    token: string;
    verify: boolean;
}

export interface iUserData extends iUser, Document {}