
import mongoose, { connection } from "mongoose";


export const DBconnection = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
        
    }
} 
