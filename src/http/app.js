import express from "express";
import morgan from "morgan";
import elementsRoutes from "./rest/routes/elementsRoutes";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/elements",elementsRoutes);

app.listen(app.get("port"), ()=> {
    console.log(`Server on port ${app.get("port")}`);
})