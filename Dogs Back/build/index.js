"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors_1 = __importDefault(require("cors"));
// import db from './src/models'
const server = express();
const port = process.env.PORT || 3001;
server.use((0, cors_1.default)());
server.use(express.json());
server.use;
server.use((err, req, res, next) => {
    const message = err.message || err;
    console.error(err);
    res.status(500).send(message);
});
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
exports.default = server;
