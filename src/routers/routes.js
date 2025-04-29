const { Router } = require("express");
const router = Router();
const auth = require("../middlewares/auth");
const checkinputs = require("../lib/checkInputs");
const registerController = require("../controllers/register");
const registerFields = require("../fields/register");

router.get("/register/get/:email", registerController.get);
router.get("/register/list/", registerController.list);
router.post("/register/login", checkinputs(registerFields.login()), registerController.login);
router.post("/register/create", checkinputs(registerFields.create()), auth, registerController.create);
router.put("/register/update/:email", checkinputs(registerFields.update()), auth, registerController.update);
router.delete("/register/delete/:email", checkinputs(registerFields.delete()), auth, registerController.delete);

module.exports = router;
