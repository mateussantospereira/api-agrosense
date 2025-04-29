const registerModel = require("../models/register");
const jwt = require("../services/jwt");
const bcrypt = require("../services/bcrypt");
const response = require("../helpers/response");

class registerController {
    async get(req, res) {
        const { email } = req.params;
        const user = await registerModel.get(email);
        return res.json(user);
    }

    async list(req, res) {
        const users = await registerModel.list();
        return res.json(users);
    }

    async login(req, res) {
        const data = req.body;
        const user = await registerModel.get(data.email);
        const validePassword = await bcrypt.compare(
            data.password, user[0].password)

        if (!user[0] || !validePassword) {
            return res.json("E-mail ou senha incorretos.");
        } 

        const token = jwt.create(user);

        return response(res, 200, "Login efetuado.", token)
    }

    async create(req, res) {
        let data = req.body;
        const password = await bcrypt.create(data.password);
        data.password = password;
        const user = await registerModel.create(data);
        return res.json(user);
    }

    async update(req, res) {
        const { email } = req.params;
        console.log(email)
        const user = await registerModel.update(req.body, email);
        return res.json(user);
    }

    async delete(req, res) {
        const { email } = req.params;
        const user = await registerModel.delete(email);
        return res.json(user);
    }
}

module.exports = new registerController();
