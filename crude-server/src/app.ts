import express from "express";
import bodyParser from "body-parser";
import resourceRoutes from "./routes/resource.routes";

const app = express();

app.use(bodyParser.json());
app.use("/api", resourceRoutes);

export default app;
