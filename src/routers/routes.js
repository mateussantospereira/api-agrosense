const { Router } = require("express");
const router = Router();
const auth = require("../middlewares/auth");
const checkinputs = require("../lib/checkInputs");
const registerController = require("../controllers/register");
const trapController = require("../controllers/trap");
const registerFields = require("../fields/register");
const trapFields = require("../fields/trap");

// Rotas de registro
router.get("/register/get/:email", registerController.get);
router.get("/register/list/", registerController.list);
router.post("/register/login", checkinputs(registerFields.login()), registerController.login);
router.post("/register/create", checkinputs(registerFields.create()), auth, registerController.create);
router.put("/register/update/:email", checkinputs(registerFields.update()), auth, registerController.update);
router.delete("/register/delete/:email", checkinputs(registerFields.delete()), auth, registerController.delete);

// Rotas de armadilha
router.get("/trap/get/:id", trapController.get);
router.get("/trap/list/", trapController.list);
router.post("/trap/create", checkinputs(trapFields.create()), auth, trapController.create);
router.put("/trap/update/:id", checkinputs(trapFields.update()), auth, trapController.update);
router.delete("/trap/delete/:id", checkinputs(trapFields.delete()), auth, trapController.delete);

module.exports = router;
