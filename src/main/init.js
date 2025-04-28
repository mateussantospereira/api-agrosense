const createDatabase = require("../database/create");
const router = require("../routers");

module.exports = async (app, express) => {
    await router(app, express);
    await createDatabase.init();
}
