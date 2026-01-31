import express from "express";
import { router } from "./routes/requirements.routes.js";
import { config } from "./config/index.js";
import { connectDB } from "./db/index.js";
import cors from "cors";
await connectDB();

const PORT = config.port;
const app = express();

app.use(cors({
    origin : ["http://localhost:3000",],
}));
app.use(express.json());
app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`);
})

export {app};
