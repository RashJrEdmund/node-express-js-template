import * as dotevn from "dotenv";

dotevn.config();

export const config = {
    app: {
        port: process.env.PORT || 8000,
    },
    db: {
        mongo: {
            db_url: String(process.env.MONGO_CONNECT_URL) || "",
            db_password: "",
        },
    },
    jwt: {
        secret: process.env.JWT_PRIVATE_KEY || "",
        expire_time: process.env.TOKEN_EXPIRERY_TIME || "5 days",
    },
    bcrypt: {
        salt_rounds: Number(process.env.SALT_ROUNDS) || 12, // must be of type number
    }
}
