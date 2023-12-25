import {NextFunction, Response, Request} from "express"
import {HTTP} from "./enums"
import {ObjectSchema} from "joi";


export default (schema: ObjectSchema<any>) =>{
    return (req:Request, res:Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);

        if (error === undefined) {
            next();
        } else {
            return res.status(HTTP.Bad).json({
                error: error.details[0].message
            });
        }
    };
};