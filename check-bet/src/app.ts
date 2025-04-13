import express from "express";
import { add } from "./add";
const app = express();

app.get("/", (req,res) => {
    res.send(`hello from vercel with ${add(89,87)}`);
})
app.listen(9000, () => console.log(`there is something running on http://localhost:${9000}`));
export default app;