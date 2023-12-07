// TODO +=> uncomment this if you have bcrypt and jwt installed and you want to use the validation methods
// also, the constanst should be uncommented to be properly imported from src/services/constants.ts file

import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken";

import { config } from "../../config";

export class BCRYPT_SERVICE {
    static hash = async (password: string) => {
        return bcrypt.hash(String(password), config.bcrypt.salt_rounds);
    }

    static compare = async (_plain_password: string, prev_hash: string) => {
        return bcrypt.compare(_plain_password, prev_hash);
    }
}

export class JWT_SERVICE {
    static sign = (_user: object) => {
        return jwt.sign(
            { ..._user },
            config.jwt.secret,
            { expiresIn: config.jwt.expire_time }
        );
    }

    static verify = (token: string) => {
        return jwt.verify(token, config.jwt.secret);
    }
}
