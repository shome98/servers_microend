import { add } from "./app";
import http from "http";
import dotenv from "dotenv";

dotenv.config();
const server = http.createServer((req,res) => {
    if (req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const addnum = add(9, 10);
        const responsed = `hello from server with ${addnum}`;
        res.end(responsed);
    }
    else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`there is something running on http://localhost:${port}`);
})