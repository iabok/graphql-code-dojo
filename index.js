var express = require('express');
var bodyParser = require('body-parser');
var { ApolloServer} = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');
var book = require('./services/index.js')

var typeDefs = [`
  type Query {
    book(id: String!): Book,
    books: [Book]
  }

  input bookInput {
    author: String 
    title: String 
  }

  type Book {
    id: String!
    author: String
    contributor: String
    contributor_note: String
    description: String
    price: String
    primary_isbn10: String
    reOrderQuantity: String
    primary_isbn13: String
    publisher: Boolean
    title: String,
    authors: [Author]
  }

  type Author {
    id: String!
    first_name: String
    last_name: String
    email: String
    num_of_books: String
  }

  type Mutation {
    addBook(book: bookInput): Book,
    updateBook(id: String!, book: bookInput): Book,
    deleteBook(id: String!): [Book]
  }`
];

var resolvers = {
    Query: {
      book: function (_source, args, _context) {
        return book.findOne(args.id)
      },
      books: function (_source, _args, _context) {
        return book.findAll()
      }
    },
    Mutation: {
      addBook: function (_source, args, _context) {
        return book.createBook(args.book)
      },
      updateBook: function (_source, args, _context) {
        return book.updateBook(args.id, args.book)
      },
      deleteBook: function (_source, args, _context) {
        return book.deleteBook(args.id)
      }
    },
  };

var schema = makeExecutableSchema({ typeDefs, resolvers });

var app = express();

var PORT = 4001

app.use(bodyParser.urlencoded({ extended: false }))

var server = new ApolloServer({ schema })
  
server.applyMiddleware({ app })
  
app.listen({ port: PORT }, function () {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
});
