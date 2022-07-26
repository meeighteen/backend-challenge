import express from "express";
import morgan from "morgan";
import elementsRoutes from "./rest/routes/elementsRoutes";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/elements",elementsRoutes);

export default app;