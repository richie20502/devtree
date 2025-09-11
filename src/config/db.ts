import mongoose from "mongoose";
import colors from "colors"

export const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI;
        const {connection} = await mongoose.connect(url);
        const url2 = `${connection.host}:${connection.port}`
        console.log(url2);
        console.log( colors.bgGreen.bold(`MongoDB Conectado en ${url2}`));
    } catch (error) {
        console.log( colors.bgRed.bold(error.message));
        process.exit(1);
    }
}