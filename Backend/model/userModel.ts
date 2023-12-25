import {Schema, model} from "mongoose";
import {iUserData} from "../utils/interfaces"

const userModel = new Schema<iUserData>(
{
    userName: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
    },
    token: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    verify: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true}
)

export default model<iUserData>("users", userModel)