const { Router } = require("express");
const router = Router();
const checkinputs = require("../lib/checkInputs");
const registerController = require("../controllers/regiter");
const registerFields = require("../fields/register");

router.get("/register/get/:email", registerController.get);
router.get("/register/list/", registerController.list);
router.post("/register/login", checkinputs(registerFields.login()), registerController.login);
router.post("/register/create", checkinputs(registerFields.create()), registerController.create);
router.put("/register/update/:email", registerController.update);
router.delete("/register/delete/:email", registerController.delete);

module.exports = router;
