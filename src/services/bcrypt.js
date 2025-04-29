const bcryptjs = require("bcryptjs");

class bcrypt {
    async create(password) {
        return await bcryptjs.hash(password, 8);
    }

    async compare(password, real) {
        return await bcryptjs.compare(password, real);
    }
}

module.exports = new bcrypt();
