console.clear()
import express, { Application } from "express"
import cors from "cors"
import { mainApp } from "./mainApp";
import env from "dotenv"
import { dbConfig } from "./utils/dbConfig";
env.config();



const Port: number = parseInt(process.env.PORT!)
const app: Application = express()

app.use(cors())
app.use(express.json());

mainApp(app)

const server = app.listen(Port, () => {
    console.clear()
    console.clear()
    console.log("Running on Port", Port)
    dbConfig()
})
process.on("uncaughtException", (error: Error) => {
    console.log("uncaughtException: ", error);
    process.exit(1);
});

process.on("rejectionHandled", (reason: any) => {
    console.log("rejectionHandled: ", reason);
    server.close(() =>{
        process.exit(1)
    });
});
