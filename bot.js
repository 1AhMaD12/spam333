const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("582927196771975218")
setInterval(function() {
channel.send(`نبغا نصير مطانييخ`);
}, 30)
})

client.login("NTgyOTI2NTQxNjg0NjA0OTI4.XO065w.YhsV-RwjJmMPQ8X9FK8KOH-1A2w");
