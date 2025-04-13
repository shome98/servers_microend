"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const addnum = (0, app_1.add)(9, 10);
        const responsed = `hello from server with ${addnum}`;
        res.end(responsed);
    }
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});
server.listen(9000, () => {
    console.log("there is something running on http://localhost:9000");
});
