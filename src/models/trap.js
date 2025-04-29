const executeQuery = require("../helpers/executeQuery");

class trapModel {
    async list() {
        const sql = "SELECT * FROM traps";
        return await executeQuery(sql);
    } 

    async get(id) {
        const sql = "SELECT * FROM traps WHERE id = ?";
        return await executeQuery(sql, id);
    } 

    async create(data) {
        const sql = "INSERT INTO traps SET ?";
        return await executeQuery(sql, data);
    } 

    async update(data, id) {
        const sql = "UPDATE traps SET ? WHERE id = ?";
        return await executeQuery(sql, [data, id]);
    } 

    async delete(id) {
        const sql = "DELETE FROM traps WHERE id = ?";
        return await executeQuery(sql, id);
    } 
}

module.exports = new trapModel();
