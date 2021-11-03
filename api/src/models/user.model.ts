import { Schema, model } from "mongoose";
import {IUser} from '../interfaces/user.interface';

const UserSchema = new Schema<IUser>(
    {   
        userName: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        profilePic: {type: String, default: ""},
        isAdmin: {type: Boolean, default: false}
    },
    {
        timestamps: true
    }
);

export default model('User', UserSchema);