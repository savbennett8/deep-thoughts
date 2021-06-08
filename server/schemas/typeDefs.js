//import the gql tagged template function
//----------------^advanced use of template literals
const { gql } = require('apollo-server-express');
//create our typeDefs
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
    }
    type Query {
        thoughts(username: String): [Thought]
    }
`;

module.exports = typeDefs;