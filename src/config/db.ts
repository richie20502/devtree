import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = "mongodb+srv://richielugorecillas1990_db_user:V3P2ywQke7dt06QQ@cluster0.nkddean.mongodb.net/linktree_node_typescript";
        const {connection} = await mongoose.connect(url);
        const url2 = `${connection.host}:${connection.port}`
        console.log(url2);
        console.log(`MongoDB Conectado en ${url2}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}