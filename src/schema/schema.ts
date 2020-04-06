import {gql} from 'apollo-server-express';
import {Message, IMessage} from '../models/message';
import {Author, IAuthor} from '../models/author';
import {Status} from '../../spec/Status';

export const typeDefs = gql`
    type Message {
        _id: ID!,
        text: String!,
        author: Author!,
        date: String!,
    }

    input MessageInput {
        text: String!,
        date: String!,
        author: AuthorInput!,
    }

    type Author {
        name: String!,
    }

    input AuthorInput {
        name: String!,
    }

    type Status {
        status: String!,
        message: String,
    }

    type Query {
        getAuthors: [Author]!,
        getMessages: [Message]!,
    }

    type Mutation {
        addMessage(message: MessageInput!): Message!,
        addAuthor(author: AuthorInput!): Author!,
        updateMessage(id: String!, newText: String!): Status!,
        deleteMessage(id: String!): Status!,
    }
`;

export const resolvers = {
  Query: {
    getAuthors: async () => await Author.find().exec(),
    getMessages: async () => await Message.find().exec(),
  },
  Mutation: {
    addMessage: async (_: any, args: { message: IMessage }) => {
      try {
        return await Message.create(args.message);
      } catch (e) {
        return new Error(`Cannot create new message: ${e.message}`);
      }
    },
    addAuthor: async (_: any, args: { author: IAuthor }) => {
      try {
        return await Author.create(args.author);
      } catch (e) {
        return new Error(`Cannot create new author: ${e.message}`);
      }
    },
    updateMessage: async (_: any, args: { id: string, newText: string }) => {
      try {
        await Message.updateOne({_id: args.id}, {text: args.newText});
        return new Status('ok');
      } catch (e) {
        return new Status('error', `Cannot update message: ${e.message}`);
      }
    },
    deleteMessage: async (_: any, args: { id: string }) => {
      try {
        await Message.deleteOne({_id: args.id}).exec();
        return new Status('ok');
      } catch (e) {
        return new Status('error', `Cannot delete message: ${e.message}`);
      }
    }
  }
};