const express = require("express");
const userController = require("../../controller/user.controller");
const router = express.Router();

router.route("/")
// .get(userController.getUser)
// .post(userController.createAUser)

module.exports = router;