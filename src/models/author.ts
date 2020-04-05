import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export interface IAuthor {
  name: string;
}

const AuthorSchema = new mongoose.Schema({
  name: String,
});

export const Author = mongoose.model('Author', AuthorSchema);
export const AuthorTC = composeWithMongoose(Author);