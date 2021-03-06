const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} - Komut Sayısı`)
    .setDescription('**\nToplam**  **' + client.commands.size + '** **Komut Vardır!**')
    .setColor("#ff0000")
    .setThumbnail('https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["komut"],
  kategori: 'genel',
  guildOnly: true,
  permLevel: 0
 
};

exports.help = {
  name: 'komutlar',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komutlar'
};