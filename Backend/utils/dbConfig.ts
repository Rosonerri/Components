console.clear()
import env from "dotenv"
import {connect} from "mongoose"
env.config();

export const dbConfig = async () =>{
    try {
        await connect(process.env.DATABASE_URL!)
        .then(() =>{
            console.log("db Connected.......🔥🔥🔥")
        })
        .catch(() => console.error())
    } catch (error) {
        return error;
    }
};


