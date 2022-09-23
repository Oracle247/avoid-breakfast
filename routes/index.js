const express = require("express");
const router = express.Router();

const contacts = require("../controllers/contacts");
const validateField = require("../middlewares/validateField");

//single url
router.post("/contacts", validateField, contacts);

module.exports = router;
