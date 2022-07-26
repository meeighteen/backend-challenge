import app from "./app";
import createSession from "./dialogflow/venomBot";

createSession();

app.listen(app.get("port"), ()=> {
    console.log(`Server on port ${app.get("port")}`);
})