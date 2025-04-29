const trapModel = require("../models/register");
const response = require("../helpers/response");

class trapController {
    async get(req, res) {
        const { id } = req.params;
        const trap = await trapModel.get(id);
        return res.json(trap);
    }

    async list(req, res) {
        const traps = await trapModel.list();
        return res.json(traps);
    }

    async create(req, res) {
        const trap = await trapModel.create(req.body);
        return res.json(trap);
    }

    async update(req, res) {
        const { id } = req.params;
        const trap = await trapModel.update(req.body, id);
        return res.json(trap);
    }

    async delete(req, res) {
        const { id } = req.params;
        const trap = await trapModel.delete(id);
        return res.json(trap);
    }
}

module.exports = new trapController();
