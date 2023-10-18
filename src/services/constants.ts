import { config } from "dotenv";

config(); // TODO +=> configuring .env to read hear. don't forget to update this path in the build

const MONGO_CONNECT_URL = process.env.MONGO_CONNECT_URL;

const PORT = process.env.PORT || 8000;

const MY_GITHUB_URL = process.env.MY_GITHUB_URL;

const MY_TWITTER_URL = process.env.MY_TWITTER_URL

export {
    MONGO_CONNECT_URL,
    PORT,
    MY_GITHUB_URL,
    MY_TWITTER_URL
};
