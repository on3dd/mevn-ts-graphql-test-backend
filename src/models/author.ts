import mongoose from 'mongoose';

export interface IAuthor {
  name: string;
}

const AuthorSchema = new mongoose.Schema({
  name: String,
});

export const Author = mongoose.model('Author', AuthorSchema);