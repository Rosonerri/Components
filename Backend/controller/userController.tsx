import bcrypt from "bcrypt"
import crypto from "crypto"
import {Request, Response} from "express"
import  userModel  from "../model/userModel"
import { Grocery, HTTP } from "../utils/enums"


export const createUser = async (req:Request, res:Response) =>{
    try {
        const {email, password, userName} = req.body

        const encrypt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, encrypt)

        const token = crypto.randomBytes(3).toString("hex");
        

        const user = await userModel.create({
            email,
            password: hashedPassword,
            userName, 
            token,
            status: Grocery.User
        });

        //Email Section

        return res.status(HTTP.Created).json({
            message: "User Created Succesfully",
            data: user
        })
    } catch (error: any) {
        return res.status(HTTP.Bad).json({
            message: "Unable to Create User"
        });
    }
};

export const verifyUser = async (req:Request, res: Response) =>{
    try {
        const {token} = req.body;
        const getUser = await userModel.findOne({ token })

        if (getUser){
            await userModel.findByIdAndUpdate(
                getUser._id,
                {
                    token: "",
                    verify: true,
                },
                { new: true }
            );

            return res.status(HTTP.Ok).json({
                message: "User Has Been Verified",
            });
        } else {
            return res.status(HTTP.Bad).json({
                message: "No User Found",
            });
        }

    } catch (error: any) {
        return res.status(HTTP.Bad).json({
            message: "Error creating User"
        })
    }
}
