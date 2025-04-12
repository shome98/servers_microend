import http from "http";
import app from "./app.js";
const server = http.createServer(app);
server.listen(process.env.PORT, () => console.log(`Server is running at http://localhost:${process.env.PORT}`));
