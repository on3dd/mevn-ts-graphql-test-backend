import {gql} from 'apollo-server-express';
import {Message, IMessage} from '../models/message';
import {Author, IAuthor} from '../models/author';

export const typeDefs = gql`
    type Message {
        id: ID!,
        text: String,
        author: Author,
        date: String,
    }
    
    input MessageInput {
        id: ID!,
        text: String,
        date: String,
        author: AuthorInput,
    }

    type Author {
        name: String!,
    }
    
    input AuthorInput {
        name: String!,
    }

    type Query {
        getMessages: [Message]!,
    }
    
    type Mutation {
        addMessage(message: MessageInput!): Message,
        addAuthor(name: String!): Author,
    }
`;

export const resolvers = {
  Query: {
    getMessages: async () => await Message.find().exec(),
  },
  Mutation: {
    addMessage: async (_: any, args: IMessage) => {
      try {
        return await Message.create(args);
      } catch (e) {
        console.error(e);
        return e.message;
      }
    },
    addAuthor: async (_: any, args: IAuthor) => {
      try {
        return await Author.create(args);
      } catch (e) {
        console.error(e);
        return e.message;
      }
    }
  }
};