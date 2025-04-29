class registerFields {
    login() {
        return {
            email: { nome: "E-mail", max: 60 },
            password: { nome: "Senha", max: 20 }
        };
    }

    create() {
        return {
            name: { nome: "nome", min: 10, max: 60, ndc: ["especiais", "numeros"] },       
            email: { nome: "e-mail", min: 12, max: 60, obg: ["@", "."], ndc: ["especiais"] },
            password: { nome: "senha", min: 8, max: 20 },
            token: { nome: "token", max: 200 }
        }; 
    }

    update() {
        return {
            name: { nome: "nome", min: 10, max: 60, ndc: ["especiais", "numeros"] },       
            password: { nome: "senha", min: 8, max: 20 },
            token: { nome: "token", max: 200 }
        }; 
    }

    delete() {
        return {
            token: { nome: "token", max: 200 }
        }
    }
}

module.exports = new registerFields();
