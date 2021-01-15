const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "finduser",
  category: "info",
  description: "Find an user from the guild, where the command is used",
  aliases: ["fu", "find"],
  run: async (bot, message, args) => {
    if (!args.length)
      return message.channel.send(
        "You have to atleast provide a name, for me to search for it!"
      );
    const searchMember =
      message.guild.members.cache.find(member =>
        member.user.tag.toLowerCase().includes(args[0].toLowerCase())
      ) || message.mentions.users.first();
    if (!searchMember)
      return message.channel.send(
        `Sorry, I wasn't able to find anybody named **${args[0]}**`,
        {
          allowedMentions: {
            parse: []
          }
        }
      );
    const user = searchMember.user || message.mentions.users.first();
    message.channel.send(
      `I found out ${user}, from the name you had provided`,
      {
        allowedMentions: {
          parse: []
        }
      }
    );
  }
};
