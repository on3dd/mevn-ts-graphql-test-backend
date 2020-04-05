import mongoose from 'mongoose';
import {IAuthor} from './author';

export interface IMessage {
  text: string;
  date: string;
  author: IAuthor;
}

const MessageSchema = new mongoose.Schema({
  text: String,
  date: String,
  author: mongoose.Schema.Types.Mixed,
});

export const Message = mongoose.model('Message', MessageSchema);