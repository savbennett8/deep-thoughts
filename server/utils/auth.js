const jwt = require('jsonwebtoken');

//secret allows server to verify whether it recognizes this token
//it's best to save this in an env. variable
const secret = 'mysecretsshhhh';

const expiration = '2h';

module.exports = {
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};