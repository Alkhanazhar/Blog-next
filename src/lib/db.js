import mongoose from "mongoose"
export const db_connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connect to MongoDB")
    } catch (error) {
        console.log(error.message)
    }
}