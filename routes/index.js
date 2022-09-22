const express = require("express");
const router = express.Router();

const contacts = require("../controllers/contacts");

//single url
router.post("/contacts", contacts);

module.exports = router;
