'use strict';

const express = require("express");
const app = express();

app.use(express.json());

var PORT = process.env.PORT || 9000;
app.listen(PORT, function () {
    console.log("Server has started at port : " + PORT);
});
