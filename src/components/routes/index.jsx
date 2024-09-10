import CreateBlog from "../controllers/index";

const express = require("express");
const router = express.Router();

const createBlog = <CreateBlog />;

router.put("/create", createBlog);

module.exports = router;
