const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "Get the invite link of the bot",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle("HERE INVITE LINK OF BOT")
      .setDescription(
        `[Invite](https://discord.com/api/oauth2/authorize?client_id=673080407016865792&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D673080407016865792%26permissions%3D150646%26scope%3Dbot&scope=bot)`
      )
      .setColor("RANDOM")
      .setFooter(`Invite me please!`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
