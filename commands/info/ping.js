const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "ping",
  category: "info",
  run: async (client, message, args) => {
    let StartDate = Date.now();
    const Wait = new MessageEmbed()
      .setColor(`${Color}`)
      .setDescription(`Please Wait...`);
    message.channel.send(Wait).then(Msg => {
      let EndDate = Date.now();

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Pong!`)
        .addField("Message Latency", `${Math.floor(StartDate - EndDate)}`)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`)
        .setTimestamp();
      Msg.delete();
      message.channel.send(embed);
    });
  }
};
