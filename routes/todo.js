const express = require("express");
const router = express.Router();
const { getList, postTask } = require("../controllers/todo");



router.get("/list", getList );

router.post("/add", postTask);



module.exports = router;