console.clear()
import { Application, Request, Response } from "express";
import { HTTP } from "./utils/enums";
import  RealAuth from "./router/userRouter"


export const mainApp = (app: Application) =>{
    try {
        app.use("/api/user", RealAuth);

        app.get("/", (req: Request, res: Response) =>{
            try {
                const user = req.user;
                return res.status(HTTP.Ok).json({
                    message: "Awesome API"
                })

            } catch (error) {
                
            }
        })
    } catch (error) {
        
    }
}