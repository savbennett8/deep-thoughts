const { User, Thought } = require('../models');

//resolver can accept 4 arguments in order:
//parent, args, context, & info

const resolvers = {
    Query: {
        //get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('thoughts');
        },

        //get a single user by _id
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('thoughts');
        },

        //get all thoughts or optionally find all thoughts created by a single user by username
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        },

        //get a single thought by _id
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
        }
    }
};

module.exports = resolvers;