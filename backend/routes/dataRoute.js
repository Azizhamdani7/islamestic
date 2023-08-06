const express = require("express");
const router = express.Router();
const { addData, getAllData } = require("../controllers/dataController");

router.post("/add", addData);
router.get("/getData", getAllData);

module.exports = router;
