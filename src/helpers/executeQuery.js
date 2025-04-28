const connection = require("../database/connection");

const executeQuery = async (sql, params = "") => {
    return new Promise((resolve) => {
        connection.query(sql, params, (error, response) => {
            if (error) {
                console.log(error)
                return resolve("Erro");
            }

            return resolve(response);
        });
    });
}

module.exports = executeQuery;
