import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {
        console.log("Request from origin:", origin);
        if (origin === "http://127.0.0.1:5173") {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}