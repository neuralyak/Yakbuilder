const express = require("express");
const router = express.Router();
const modelController = require("../controllers/modelController");

router.post("/generate", modelController.generateText);

module.exports = router;
