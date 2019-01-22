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

client.on("messageReactionAdd", async (reaction, user) => {
     const message = reaction.message;
   if (reaction.emoji.name === 'lewdie') {
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.addRole('499314075449425940')
     // if(reactionmember.roles.has("499314075449425940")) return;
   //  reactionmember.send("Congrats, you've self-assigned yourself the Finished Product Testers role.")
     console.log("Worked! It's added. (FPT)");
   } else if (reaction.emoji.name === 'smuggal')  { 
     let reactionmember2 = message.guild.members.get(user.id);
    await reactionmember2.addRole('514348752589291536')
   //  reactionmember2.send("Congrats, you've self-assigned yourself the NSFW ACCESS role.")
     console.log("Worked! It's added. ()");
   }
});

client.on("messageReactionRemove", async (reaction, user) => {
     const message = reaction.message;
   if (reaction.emoji.name === 'lewdie') {
     let reactionmember = message.guild.members.get(user.id);
   await reactionmember.removeRole('499314075449425940')
//   reactionmember.send("Congrats, you've self-removed yourself the Finished Product Testers role.")
     console.log("Worked! It's removed. (FPT)")
    } else if (reaction.emoji.name === 'smuggal') {
     let reactionmember2 = message.guild.members.get(user.id);
    await reactionmember2.removeRole('514348752589291536')
   //  reactionmember2.send("Congrats, you've self-removed yourself the NSFW ACCESS role.")
     console.log("Worked! It's removed. (NA)");
   }
});


client.on('raw', packet => {
    // We don't want this to run on unrelated packets
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
    // Grab the channel to check the message from
    const channel = client.channels.get(packet.d.channel_id);
    // There's no need to emit if the message is cached, because the event will fire anyway for that
    if (channel.messages.has(packet.d.message_id)) return;
    // Since we have confirmed the message is not cached, let's fetch it
    channel.fetchMessage(packet.d.message_id).then(message => {
        // Emojis can have identifiers of name:id format, so we have to account for that case as well
        const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
        // This gives us the reaction we need to emit the event properly, in top of the message object
        const reaction = message.reactions.get(emoji);
        // Check which type of event it is before emitting
        if (packet.t === 'MESSAGE_REACTION_ADD') {
            client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
        }
        if (packet.t === 'MESSAGE_REACTION_REMOVE') {
            client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
        }
    });
});


client.login(process.env.BOT_TOKEN);
