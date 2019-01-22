const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./prefix.json');
//const { prefix } = require('./prefix.json');
const prefix = "!"
const Enmap = require('enmap');

client.on(`ready`, () => {
  console.log(`Roleplaying time!`);
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
  .setColor(0xc470fa)
  .addField("Roleplay Roles", "<:lewd:461698583465426973> = <@&536255042143911946>" + "\n" + "<:SmugGal:461698993261510676> = <@&537106357732507688>")
 let reacttime = await message.channel.send(roleembed)
await reacttime.react(message.guild.emojis.get('461698583465426973'))
await reacttime.react(message.guild.emojis.get('461698993261510676'))
message.delete()
}
  
//  if (message.content.startsWith(`${prefix}react`)) {
// //    let args = message.content.split(/ +/g).slice(1) 
// //   // let reaction = args.slice(1)
// //   // if (!reaction) return message.channel.send("Insert a message ID")
// //    if (!args) return message.channel.send("Insert a message ID")
// //    let reactionthis = args.slice(1)
// //    let channel = message.guild.channels.find(c => c.id === '534561180811919360');
// //    channel.fetchMessage(args[0])
// //   re.react('⭐')
// //    .catch(console.error);
// //    console.log(`Reacted to ${args}!`) 
// //   //.catch(e => console.log(e));
//  }
  
 if (message.content.startsWith(`${prefix}react`)) {
let args = message.content.split(/ +/g).slice(1)
     let channel = message.guild.channels.find(c => c.name === args[0]);
     if (!channel) return message.channel.send("Make sure to choose a channel.") 
    let reaction = args[1]
   if (!reaction) return message.channel.send("Insert a message ID.")
   let emojis = args.slice(2).join(" ");
   if (!emojis) return message.channel.send("No emoji picked?! Try again.")
//       let reactie = args.slice(1).join(" ");
//    if (!reactie) return message.channel.send("No emoji picked?! Try again.")
  let emojipick = client.emojis.find(emoji => emoji.name === emojis) //emojis.get(args[0])  
//    let emojipick = message.guild.emojis.get(reactie)
   if (!emojipick) return message.channel.send("No such emoji is there.")
   
   //let channel = message.guild.channels.find(c => c.id === '534561180811919360');
let fetchedMessage = await channel.fetchMessage(reaction)
if (reaction) return message.channel.send("This message already has this emoji.") 
await fetchedMessage.react(emojipick)
  let reactionembed = new Discord.RichEmbed()
  .setColor(0xc470fa)
  .addField("Reaction successfully added!", `Channel: ${channel}` + "\n" + `Emoji: ${emojipick}` + "\n" + `Emoji Added By: <@${message.author.id}>` + "\n" + `Message ID: ${reaction}`)
 message.channel.send(reactionembed) //message.guild.emojis.get(emojipick))
   message.delete()
//  .catch(console.error);
 console.log(`Reacted!`) 
 }
  
//    if (message.content.startsWith(`${prefix}removereact`)) {
// let args = message.content.split(/ +/g).slice(1)
//     let reaction = args[0]
//    if (!reaction) return message.channel.send("Insert a message ID")
//    let emojis = args.slice(1).join(" ");
//    if (!emojis) return message.channel.send("No emoji picked?! Try again.")
// //       let reactie = args.slice(1).join(" ");
// //    if (!reactie) return message.channel.send("No emoji picked?! Try again.")
//   let emojipick = client.emojis.find(emoji => emoji.name === emojis) //emojis.get(args[0])  
// //    let emojipick = message.guild.emojis.get(reactie)
//    if (!emojipick) return message.channel.send("No such emoji is there.")
//    let channel = message.guild.channels.find(c => c.id === '534561180811919360');
// let fetchedMessage = await channel.fetchMessage(reaction)
// await fetchedMessage.react(emojipick)
//   let reactionembed = new Discord.RichEmbed()
//   .setColor(0xc470fa)
//   .addField("Reaction successfully added!", `Message ID: ${reaction}` + "\n" + `Emoji: ${emojipick}` + "\n" + `Emoji Added By: <@${message.author.id}>`)
//  message.channel.send(reactionembed) //message.guild.emojis.get(emojipick))
//    message.delete()
// //  .catch(console.error);
//  console.log(`Reacted!`) 
//  }

});

client.on("messageReactionAdd", async (reaction, user) => {
     const message = reaction.message;
   if (reaction.emoji.name === 'lewd') {
     if (message.author.bot) return
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.addRole('536255042143911946')
     // if(reactionmember.roles.has("499314075449425940")) return;
   //  reactionmember.send("Congrats, you've self-assigned yourself the Finished Product Testers role.")
     console.log("Worked! It's added. (RolePlayer)");
   } else if (reaction.emoji.name === 'SmugGal')  { 
     if (message.author.bot) return
     let reactionmember2 = message.guild.members.get(user.id);
    await reactionmember2.addRole('537106357732507688')
   //  reactionmember2.send("Congrats, you've self-assigned yourself the NSFW ACCESS role.")
     console.log("Worked! It's added. (Lore Roleplayer)");
   }
});
client.on("messageReactionRemove", async (reaction, user) => {
     const message = reaction.message;

   if (reaction.emoji.name === 'lewdie') {
     let reactionmember = message.guild.members.get(user.id);
   await reactionmember.removeRole('536255042143911946')
//   reactionmember.send("Congrats, you've self-removed yourself the Finished Product Testers role.")
     console.log("Worked! It's removed. (RolePlayer)")
    } else if (reaction.emoji.name === 'smuggal') {
     let reactionmember2 = message.guild.members.get(user.id);
    await reactionmember2.removeRole('537106357732507688')
   //  reactionmember2.send("Congrats, you've self-removed yourself the NSFW ACCESS role.")
     console.log("Worked! It's removed. (Lore Roleplayer)");
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
