import { IUSER } from "../../utils/interfaces";
import { createObjectId } from "../../utils/utils";

type CREATE_FROM_BODY = (body: any, options: {
    _type: "USER", // add more types that you'll create the validations for e.g "URL" | "VISITOR",
    _strict?: boolean, // strict mode is recomended for when creating. and not editting
}) =>
    {
        status: number,
        new_user?: IUSER | null,
        // add more visitor objects to be returned and write their validations
    }

const createFromBody: CREATE_FROM_BODY = (body, options) => {
    if (options._type === "USER") {
        if (options._strict) { // strict mode is good for creation
            if (!(body.username && body.email && body.password)) return {
                status: 404,
                new_user: null
            };

            const new_user: IUSER = {
                _id: createObjectId().toString(),
                username: body.username,
                email: body.email,
                password: body.password,
                createdAt: body?.createdAt ?? new Date().toDateString(),
            }

            return { status: 200, new_user };
        } 

        const accepted_user_keys: (keyof IUSER)[] = ["_id", "username", "email", "createdAt", "updatedAt", "password"]; // TODO +=> add the neccessary keys for creating a user

        let new_user: any = {};

        for (const key in body) {
            if (accepted_user_keys.includes(key as any)) new_user = { ...new_user, [key]: body[key] };
            else throw new Error(JSON.stringify({
                message: `UNRECOGNIZED FIELD: ${key}`,
            }));
        }

        return { status: 200, new_user };
    }

    return {
        status: 404,
        new_user: null
    };
}

export default createFromBody;
