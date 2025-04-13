import { add } from "./app";
import http from "http"

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
server.listen(9000, () => {
    console.log("there is something running on http://localhost:9000");
})