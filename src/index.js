require("dotenv").config();

const mqttClient = require("./mqttClient");
const app = require("./app");

app.listen(process.env.PORT, () => console.log("Running"));
