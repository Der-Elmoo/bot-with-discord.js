const { MessageEmbed } = require("discord.js");
const Color = "RANDOM";

module.exports = {
  name: "emojiinfo",
  category: "info",
  aliases: ["infoemoji", "emoji"],
  description: "Show Emoji Information!",
  usage: "Emojinfo <Emoji>",
  run: async (client, message, args) => {
    //Start

    if (
      !args[0] ||
      !args[0].startsWith("<") ||
      !args[0].endsWith(">") ||
      !args[0].includes(":")
    )
      return message.channel.send(`Please Give A Valid Custom Emoji!`);

    let Thinger = args[0].split(":");

    let Animated;
    if (Thinger[0] === "<a") {
      Animated = true;
    } else {
      Animated = false;
    }

    const Name = Thinger[1];
    const ID = Thinger[2].slice(0, -1);
    const Link = `https://cdn.discordapp.com/emojis/${ID}.${
      Animated ? "gif" : "png"
    }?v=1`;

    const Embed = new MessageEmbed()
      .setColor(Color)
      .setThumbnail(Link)
      .setTitle(`Emoji Information!`)
      .addField(`Name`, Name, true)
      .addField(`ID`, ID, true)
      .addField(`Animated`, Animated ? "Yes" : "No", true)
      .addField(`Link`, `[Click Me](${Link})`);

    return message.channel.send(Embed);

    //End
  }
};
