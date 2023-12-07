import * as mongoose from "mongoose";
import { config } from "../../../config";

mongoose
    .connect(config.db.mongo.db_url)
    .then(() => console.log("mongoose connected \n"))
    .catch((error) => console.log("\nerror:", error.message));

export default mongoose;
