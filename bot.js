//Discord.js library
const Discord = require("discord.js");

//bot client
const client = new Discord.Client();

//load in the auth.json file
const config = require("./auth.json");
//config.token contains bot's token



client.on("ready", () => {
  //event runs on startup and successful login
  console.log(`I am ready`);
});

client.on("message", (message) => {
  var currDate = new Date();
  var hours = currDate.getHours();
  var minutes = currDate.getMinutes();
  var seconds = currDate.getSeconds();
  var currTime = hours + ":" + minutes + ":" + seconds;

  if(message.content.startsWith("ping")){
    message.channel.send("pong!");
  }

  if(message.content.startsWith("blah")){
    message.channel.send("Meh.");
  }

  if(message.content.startsWith("time")){
    message.channel.send(currTime);
  }

});

client.login(config.token);
