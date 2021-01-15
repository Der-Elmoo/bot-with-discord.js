module.exports = {
  name: "voiceunmute",
  description: "unmute a user from voice channel",
  category: "admin",
  async execute(bot, message, args) {
    if (!message.guild.me.hasPermission("MUTE_MEMBERS"))
      return message.channel.send("I don't have enough permission for that!");

    const unmuteUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );

    if (!message.member.hasPermission("MUTE_MEMBERS" || "ADMINISTRATOR"))
      return message.channel.send("You don't have permissions for that!");

    if (!unmuteUser) return message.channel.send("User wasn't found");

    if (!unmuteUser.voice.serverMute) {
      return message.channel.send(
        "User is not in a voice channel or isn't muted"
      );
    }

    unmuteUser.voice.setMute(false, "unmuteReason");

    unmuteUser.user.send(
      `You've been **Unmuted** from **${message.guild.name}**`
    );
    message.channel.send(
      `${unmuteUser} was successfully unmuted from the server. I have also send a DM letting the person know.`
    );
  }
};
