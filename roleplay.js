const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./prefix.json');
const { prefix } = require('./prefix.json');
const Enmap = require('enmap');

client.on(`ready`, () => {
  console.log(`I am ready!`);
client.user.setActivity('Roleplay Action');
  
});

// client.config = config;
// fs.readdir("./events/", (err, files) => {
//   if (err) return console.error(err);
//   files.forEach(file => {
//     const event = require(`./events/${file}`);
//     let eventName = file.split(".")[0];
//     client.on(eventName, event.bind(null, client));
//   });
// });

// client.commands = new Enmap();
// fs.readdir("./commands/", (err, files) => {
//   if (err) return console.error(err);
//   files.forEach(file => {
//     if (!file.endsWith(".js")) return;
//     let props = require(`./commands/${file}`)
//     let commandName = file.split(".")[0];
//     console.log(`Time to test ${commandName}!`);
//     client.commands.set(commandName, props);
//   });
// });

client.on('message', async (message) => {
   if (message.content.startsWith(`${prefix}startup`)) {
  let roleembed = new Discord.RichEmbed()
  .setColor()
  .addField("Roleplay ROLES", "<:lewdie:537322180447436806> = <@&499314075449425940>" + "\n" + "<:smuggal:537322213490032651> = <@&514348752589291536>")
 let reacttime = await message.channel.send(roleembed)
await reacttime.react(message.guild.emojis.get('537322180447436806'))
await reacttime.react(message.guild.emojis.get('537322213490032651'))
message.delete()
}
});


client.login(process.env.BOT_TOKEN);
