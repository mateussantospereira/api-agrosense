require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const init = require("./src/main/init");

init(app, express);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        return console.log("Erro ao iniciar API.");
    }

    console.log(`Aplicação na porta ${PORT}`);
});
