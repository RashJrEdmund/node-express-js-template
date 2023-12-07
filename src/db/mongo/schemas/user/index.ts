import db from "../../conection";

const Schema = db.Schema;

const userSchema = new Schema(
    {
        _id: { type: String }, // plan to use uuid.v4() from the front_end and overwrite the _id property mongo
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        createdAt: String,
        updatedAt: String,
    },
    {
      timestamps: true,
      toJSON: {
        transform(doc, ret, options) {
          // delete ret.password; // if uncommented, will not send these in the response
          // delete ret.createdAt;
          // delete ret.updatedAt;
        },
      },
    }
);

const UserSchema = db.model("users", userSchema);

export default UserSchema;
