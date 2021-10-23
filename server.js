'use strict';

import Config from './config/config';
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 9000;

const DB_LINK = process.env.DB_LINK || Config.DB_LINK;

const startUp = async () => {
    try {
        await mongoose.connect(DB_LINK);
        app.listen(PORT, () => {
            console.log("Server has started at port : " + PORT);
        });
    } catch (err) {
        console.log('DB connection failed');
    }
};
startUp()
    .then(() => {
        console.log('Server started successfully');
    })
    .catch(() => {
        console.log('Server failed to start');
    });
