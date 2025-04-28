class registerFields {
    login() {
        return {
            email: { nome: "E-mail", max: 60 },
            password: { nome: "Senha", max: 20 }
        };
    }

    create() {
        return {
            name: { nome: "Nome", min: 10, max: 60, ndc: ["especiais", "numeros"] },       
            email: { nome: "E-mail", min: 12, max: 60, obg: ["@", "."], ndc: ["especiais"] },
            password: { nome: "Senha", min: 8, max: 20 }
        }; 
    }
}

module.exports = new registerFields();
