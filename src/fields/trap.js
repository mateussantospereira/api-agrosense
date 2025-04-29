class registerFields {
    create() {
        return {
            id: { nome: "id", min: 1, max: 20, number: true },
            pragas: { nome: "pragas", min: 1, max: 20, number: true },
            talhao: { nome: "talhao", min: 1, max: 20, number: true },
            nde: { nome: "nde", min: 1, max: 20, number: true },
            umidade: { nome: "umidade", min: 1, max: 20, number: true },
            temperatura: { nome: "temperatura", min: 1, max: 20, number: true },
            vento: { nome: "vento", min: 3, max: 8 },
            token: { nome: "token", max: 200 }
        }; 
    }

    update() {
        return {
            pragas: { nome: "pragas", min: 1, max: 20, number: true },
            talhao: { nome: "talhao", min: 1, max: 20, number: true },
            nde: { nome: "nde", min: 1, max: 20, number: true },
            umidade: { nome: "umidade", min: 1, max: 20, number: true },
            temperatura: { nome: "temperatura", min: 1, max: 20, number: true },
            vento: { nome: "vento", min: 3, max: 8 },
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
