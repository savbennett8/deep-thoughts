const { User, Thought } = require('../models');

//resolver can accept 4 arguments in order:
//parent, args, context, & info

const resolvers = {
    Query: {
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers;