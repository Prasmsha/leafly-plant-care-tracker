const {addUser} = require("../controller/usercontroller");
const express = require("express");
const router = express.Router();

router.post("/create", addUser);

module.exports = router;