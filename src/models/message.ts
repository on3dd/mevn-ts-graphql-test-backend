import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export interface IMessage {
  text: string;
  date: string;
}

const MessageSchema = new mongoose.Schema({
  text: String,
  date: String,
});

export const Message = mongoose.model('Message', MessageSchema);
export const MessageTC = composeWithMongoose(Message);