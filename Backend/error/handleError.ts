import {NextFunction, Response, Request} from "express"
import { mainError }from "../error/mainError"
import { HTTP } from "../utils/enums"

const buildErrorMessage = (err: mainError, res: Response) =>{
return res.status(HTTP.Bad).json({
    name: err.name,
    message: err.message,
    success: err.success,
    status: err.status,
    stack: err.stack,
    error: err,
});
}

export const handleError = (err: mainError, req: Request, res: Response, next: NextFunction) =>{
 return buildErrorMessage(err, res);
}