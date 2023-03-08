const express = require("express");
const app = express();

const indexrouters = require("./routers/index.routers");

app.use('/',indexrouters);

app.listen("3000");

