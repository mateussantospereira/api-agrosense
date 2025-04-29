const executeQuery = require("../helpers/executeQuery");
const config = require("./config");
const mysql = require("mysql");

class createDatabase {
    async init() {
        await this.database();
        await this.createTableRegisters();
        await this.createTableTraps();
    }

    async database() {
        const database = process.env.DATABASE_NAME;
        const sql = `CREATE DATABASE IF NOT EXISTS ${database}`;

        const connection = mysql.createConnection(config.config());

        return new Promise((resolve) => {
            connection.query(sql, (error, response) => {
                if (error) {
                        console.log(error)
                    return resolve(console.log("Erro ao criar banco de dados."));
                }

                return resolve(console.log("Banco de dados criado com êxito."))
            });
        });
    }

    async createTableRegisters() {
        const sql = `
            CREATE TABLE IF NOT EXISTS registers (
                id int not null auto_increment primary key,
                email varchar(100) not null unique,
                name varchar(100) not null,
                password varchar(100) not null
            );
        `;

        return this.createTable(sql, "registers")
    }

    async createTableTraps() {
        const sql = `
            CREATE TABLE IF NOT EXISTS traps (
                id int not null auto_increment primary key,
                email varchar(100) not null unique,
                name varchar(100) not null,
                password varchar(100) not null
            );
        `;

        return this.createTable(sql, "traps")
    }

    async createTable(sql, name) {
        try {
            executeQuery(sql);
            return console.log(`Tabela ${name} criada com êxito.`);
        } catch (error) {
            return console.log(`Erro ao criar tabela ${name}.`);
        }
    }
}

module.exports = new createDatabase();
