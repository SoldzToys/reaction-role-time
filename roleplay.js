const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./prefix.json');
const { prefix } = require('./prefix.json');

client.on(`ready`, () => {
  console.log(`I am ready!`);
client.user.setActivity('Roleplay Action');
  
});
