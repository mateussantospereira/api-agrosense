const jsonwebtoken = require("jsonwebtoken"); 

class jwt {
    create(user) {
        const token = jsonwebtoken.sign(
            { type: user.token }, 
            process.env.SECRET,
            { expiresIn: "5h" }
        );

        return token;
    }
}

module.exports = new jwt();
