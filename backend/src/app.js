import express from "express";
import { router } from "./routes/requirements.routes.js";
import { config } from "./config/index.js";
import { connectDB } from "./db/index.js";

await connectDB();

const PORT = config.port;
const app = express();


app.use(express.json());
app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`);
})

export {app};
