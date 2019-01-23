const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./prefix.json');
const superiors = require('./admins.json');
//const { prefix } = require('./prefix.json');
const prefix = "!"
const Enmap = require('enmap');

client.on(`ready`, () => {
  console.log(`Roleplaying time!`);
client.user.setActivity('Roleplay Action (!info)');
  
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
         let admins = '363499842607120384' || '178706812864823296' || '235581033662251008'
     if (message.author.id !== admins) return message.channel.send("Since you aren't `Sai#8085` or `GLRC Sneky God of Chaos#3714`, you can't use this command.").then(message => message.delete(30000));
//if(!message.member.roles.has("365789462292332547")) return message.channel.send("You don't have the <@&365789462292332547> role! Only members with that role can use this command.");
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
  
   if (message.content.startsWith(`${prefix}info`)) {
   //  if (message.author.id !== '363499842607120384' || '178706812864823296' || '235581033662251008') return message.channel.send("Since you aren't `Sai#8085` or `GLRC Sneky God of Chaos#3714`, you can't use this command.").then(message => message.delete(10000));
   //  if (message.author.id !==  superiors.admin2)return message.channel.send("Since you aren't `Sai#8085` or `GLRC Sneky God of Chaos#3714`, you can't use this command.").then(message => message.delete(10000));
   //  if (message.author.id !==  superiors.admin3)return message.channel.send("Since you aren't `Sai#8085` or `GLRC Sneky God of Chaos#3714`, you can't use this command.").then(message => message.delete(10000));
     let bicon = client.user.displayAvatarURL;
     let embed = new Discord.RichEmbed()
       .setColor(0xc470fa)
       .addField("Profile Artwork By", "Willibeest#2814")
       .addField("Bot Made By", "Soldz (CF)#6819")
       .setThumbnail(bicon) 
     message.channel.send(embed)
   }
  
 if (message.content.startsWith(`${prefix}react`)) {
        let admins = '363499842607120384' || '178706812864823296' || '235581033662251008'
     if (message.author.id !== admins) return message.channel.send("Since you aren't `Sai#8085` or `GLRC Sneky God of Chaos#3714`, you can't use this command.").then(message => message.delete(30000));
// if(!message.member.roles.has("365789462292332547")) return message.channel.send("You don't have the <@&365789462292332547> role! Only members with that role can use this command.");
let args = message.content.split(/ +/g).slice(1)
//   if (emojipick) return message.channel.send("This message already has this emoji.")
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
//     message.channel.send("Good work, here is the next part.") 
//     let beginning = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 })
//     beginning.on('collect', async (message) => {
//             if (message.content.toLowerCase().startsWith("addrole")) {
//  let role = args.slice(1).join(" ");
//   if(!role) return message.channel.send("Pick a role you want to add to this user.");
//   let addrole = message.guild.roles.find(r => r.name === role);
//   if (!addrole) return message.channel.send("The role you've picked either doesn't exist or you've spelled it wrong.");
//             })
   //let channel = message.guild.channels.find(c => c.id === '534561180811919360');
// client.on('messageReactionAdd', async (reaction, user) => {
//   if (reaction.emoji.name === emojipick) { 
//     return message.channel.send("This message already has this emoji.")
//   }
// });
let fetchedMessage = await channel.fetchMessage(reaction) 
await fetchedMessage.react(emojipick)
   let logs = message.guild.channels.find(c => c.name === 'logs');
  let reactionembed = new Discord.RichEmbed()
  .setColor(0xc470fa)
  .addField("Reaction successfully added!", `Channel: ${channel}` + "\n" + `Emoji: ${emojipick}` + "\n" + `Emoji Added By: <@${message.author.id}>` + "\n" + `Message ID: ${reaction}`)
 logs.send(reactionembed) //message.guild.emojis.get(emojipick))
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
     if (user.bot) return;
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.addRole('536255042143911946')
     // if(reactionmember.roles.has("499314075449425940")) return;
   //  reactionmember.send("Congrats, you've self-assigned yourself the Finished Product Testers role.")
     console.log("Worked! It's added. (RolePlayer)");
   } else if (reaction.emoji.name === 'SmugGal')  { 
        if (user.bot) return;
     let reactionmember2 = message.guild.members.get(user.id);
    await reactionmember2.addRole('537106357732507688')
   //  reactionmember2.send("Congrats, you've self-assigned yourself the NSFW ACCESS role.")
     console.log("Worked! It's added. (Lore Roleplayer)");
     } else if (reaction.emoji.name === 'peachy')  { 
     if (user.bot) return;
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.addRole('492096695203528717')
          console.log("Worked! It's added. (peachy)");
       } else if (reaction.emoji.name === 'shellhappy')  { 
            if (user.bot) return;
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.addRole('498778090802118659')
          console.log("Worked! It's added. (fileaccess)");
         } else if (reaction.emoji.name === 'shellWAT')  {
       if (user.bot) return;
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.addRole('496863657347645471')
          console.log("Worked! It's added. (New Tester)");
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
           } else if (reaction.emoji.name === 'peachy')  { 
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.removeRole('492096695203528717')
  //      console.log("Worked! It's added. (peachy)");
       } else if (reaction.emoji.name === 'shellhappy')  { 
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.removeRole('498778090802118659')
//        console.log("Worked! It's added. (fileaccess)");
         } else if (reaction.emoji.name === 'shellWAT')  {
     let reactionmember = message.guild.members.get(user.id);
    await reactionmember.removeRole('496863657347645471')
  //      console.log("Worked! It's added. (New Tester)");
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

	client.on('guildCreate', guild => {
  let channel = client.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor(0xc470fa)
      .setAuthor(`Joined ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});

 	client.on('guildCreate', guild => {
 let channel = client.channels.get("507732390836436994");
let invite = guild.channels.random().createInvite({maxAge: 0}).then(function(newInvite){
return channel.send(`https://discord.gg/${newInvite.code}`)
    });
  });

 	client.on('guildCreate', guild => {
  //   let channel = guild.channels.find(c => c.name === 'general')
   //let oof = guild.channels.random().then(a => a.send(joinembed))
  let channel = guild.owner
    let joinembed = new Discord.RichEmbed()
    .setColor(0xc470fa)
    .addField(`Thank you for inviting ${client.user.username}!`, "I will make sure to make all of your reaction role dreams come to life!")
    .setFooter("Bot Created By Soldz (CF)#6819")
    return channel.send(joinembed);
    });

    	client.on('guildCreate', guild => {
   	let guildchannel = guild.channels;
    let channelID;
 	    Loop:
    	for (let c of guildchannel) {
     	let channelequals = c[1].type;
    	if (channelequals === "text") {
      	channelID = c[0];
    	break Loop;
     	}
   	}
 	let channel = client.channels.get(guild.systemChannelID || channelID);
 	let joinembed = new Discord.RichEmbed()
 	 .setColor(0xc470fa)
    .addField(`Thank you for inviting ${client.user.username}!`, "I will make sure to make all of your reaction role dreams come to life!")
    .setFooter("Bot Created By Soldz (CF)#6819")
 	return channel.send(joinembed);
 	});



client.on('guildDelete', guild => {
  let channel = client.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor(0xc470fa)
      .setAuthor(`Left ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});     

client.on("guildUpdate", function (oldGuild, newGuild) {
         let channel = client.channels.get("499832353544470539");
	 let gicon = newGuild.iconURL;
        const eeembed = new Discord.RichEmbed()
            .setColor(0xc470fa)
            .setThumbnail(gicon)
            .setAuthor(`A Guild Has been Updated`, gicon)
            .addField(`Old Guild Name:`, `${oldGuild}`)
            .addField(`New Guild Name:`, `${newGuild}`)
         //   .addField(`New Verification level`, newGuild.guild.verificationLevel, true)
        return channel.send(eeembed);
}); 

client.on("message", async (message) => {
if (message.content.startsWith(`${prefix}anyinvite`)) {
 let args = message.content.slice(1).split(" ");
    if (message.channel.type == "dm") return;
	
    let sv = client.guilds.get(args[1])
    if (!sv) return message.channel.send(`❌ Enter a valid guild id!`)
    sv.channels.random().createInvite({maxAge: 0}).then(a => 
    message.channel.send(a.toString()))

}
});


client.login(process.env.BOT_TOKEN);
