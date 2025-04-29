const jwt = require("../services/jwt");
const response = require("../helpers/response");

const auth = async (req, res, next) => {
    if (!(await jwt.validate(req.body.token))) {
        return response(res, 400, true, "Token inválido");
    }

    delete req.body.token;

    return next();
}

module.exports = auth;
