const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./prefix.json');
const { prefix } = require('./prefix.json');
const Enmap = require('enmap');

client.on(`ready`, () => {
  console.log(`I am ready!`);
client.user.setActivity('Roleplay Action');
  
});

client.config = config;
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`)
    let commandName = file.split(".")[0];
    console.log(`Time to test ${commandName}!`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.BOT_TOKEN);
