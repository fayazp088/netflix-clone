import { Schema, model } from "mongoose";
import { IMovie } from "../interfaces/movie.interface";

const MovieSchema = new Schema<IMovie>(
    {
        title: {type: String, required: true, unique: true},
        description: {type: String},
        img: {type: String},
        imgTitle: {type: String},
        imgSm: {type: String},
        trailer: {type: String},
        video: {type: String},
        year: {type: String},
        limit: {type: Number},
        genre: {type: String},
        isSeries: {type: Boolean, default: false}
    },
    {
        timestamps: true
    }
)

export default model('Movie', MovieSchema);