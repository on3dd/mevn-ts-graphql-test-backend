import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import {IAuthor} from './author';

autoIncrement.initialize(mongoose.connection);

export interface IMessage {
  _id: string;
  text: string;
  date: string;
  author: IAuthor;
}

const MessageSchema = new mongoose.Schema({
  _id: String,
  text: String,
  date: String,
  author: mongoose.Schema.Types.Mixed,
});

MessageSchema.plugin(autoIncrement.plugin, 'Counter');

export const Message = mongoose.model('Message', MessageSchema);