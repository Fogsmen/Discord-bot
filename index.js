client.on("message", async message => {
if(message.content.toLowerCase() === "!ticket") {
let author = message.author.id;
 let guild = client.guilds.cache.get('ID DES SERVERS, WO DAS TICKET ERSTELLT WERDEN SOLL (Erklärung im Video)')
  let modrole = guild.roles.cache.get('TEAM ROLLEN ID');
  let everyone = guild.roles.cache.get(guild.roles.everyone.id);
  let bot = guild.roles.cache.get('CLIENT ID VOM BOT');
  let channel = await guild.channels.create(`ticket-von-${message.author.username}`, { type: 'text', reason: `Erstelltes Ticket`});
  channel.setParent('856924935732854784')
  channel.setTopic(`!fertig, um das Ticket zu schließen | Ticket für ${message.author.username}`)
  channel.updateOverwrite(modrole, {
  VIEW_CHANNEL: true,
  SEND_MESSAGES: true,
  READ_MESSAGES_HISTORY: true
  });
  channel.updateOverwrite(author, {
  VIEW_CHANNEL: true,
  SEND_MESSAGES: true,
  READ_MESSAGES_HISTORY: true
  });
  channel.updateOverwrite(everyone, {
  VIEW_CHANNEL: false
  });
  channel.updateOverwrite(bot, {
  VIEW_CHANNEL: true,
  SEND_MESSAGES: true,
  READ_MESSAGES_HISTORY: true,
  MANAGE_MESSAGES: true
  })
 message.channel.send(`Dein Ticket wurde erstellt in <#${channel.id}>`)
 client.channels.cache.get(channel.id).send("<@&856923725189480518>\nHallo, das ist dein Ticket. Hier kannst du dein Problem beschreiben und die Mods kümmern sich darum!\nCommands im Ticket:\n`!fertig` - Schließt das Ticket")
}
if (message.content.toLowerCase() === "!fertig") {
 if (!message.channel.name.startsWith("ticket-von-")) return message.channel.send("Das ist kein Ticket.")
 else {
 message.channel.delete();
 }
}
})
