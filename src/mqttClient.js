const mqtt = require("mqtt");
const client = mqtt.connect(process.env.MQTT_HOST);

client.on("connect", function () {
  client.subscribe("presence", function (err) {
    if (!err) {
      client.publish("presence", "Hello MQTT");
    }
  });
});

client.on("message", function (topic, message) {
  console.log("TOPIC:", topic, " / MESSAGE:", message.toString());
  // client.end();
});

module.exports = client;
