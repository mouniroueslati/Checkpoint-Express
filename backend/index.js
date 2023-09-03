const express = require("express");
const { verifyTime } = require("./middleware/verifytime");
const cors = require ("cors")

const app = express();

app.use(cors());

app.get("/", verifyTime, (req, res) => {});

app.listen(8000);