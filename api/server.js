const express = require('express');
const projRouter = require("./projects/projects-router");
const actRouter = require("./actions/actions-router");

const server = express();
// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.use(express.json());
server.use(projRouter);
server.use(actRouter);
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Well something went completely wrong. Try that again later."
    })
})

module.exports = server;
