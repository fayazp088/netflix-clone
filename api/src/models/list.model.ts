import {Schema, model} from 'mongoose';
import { IList } from '../interfaces/list.interface';

const ListSchema = new Schema<IList>(
    {
        title: {type: String, required: true, unique: true},
        type: {type: String},
        genre: {type: String},
        content: [{type: String}]
    },
    {timestamps: true}
)

export default model('List', ListSchema);
