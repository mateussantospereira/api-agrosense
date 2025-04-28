const routes = require("./routes.js");
const swaggerUi = require("swagger-ui-express")
const swaggerDocs = require("../swagger/swagger.json")

module.exports = async (app, express) => {
    app.use(express.json());
    app.use("/", routes);
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
