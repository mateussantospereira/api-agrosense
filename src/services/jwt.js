const { promisify } = require("util");
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

    async validate(token) {
        try {
            await promisify(jsonwebtoken.verify)(token, process.env.SECRET);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }   
    }
}

module.exports = new jwt();
