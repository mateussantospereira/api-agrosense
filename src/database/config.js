const env = process.env;

class configDatabase {
    connection() {
        const config = this.config();

        return Object.assign(config, {
            database: env.DATABASE_NAME,
        });
    }

    config() {
        return {         
            host: env.DATABASE_HOST,
            port: env.DATABASE_PORT,
            user: env.DATABASE_USER,
            password: env.DATABASE_PASSWORD,
        }
    }
}
module.exports = new configDatabase();
