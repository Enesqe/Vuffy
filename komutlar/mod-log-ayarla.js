const Discord = require('discord.js')
const db = require('wio.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let mlog = message.mentions.channels.first()
  let sıfırla = db.fetch(`mlog_${message.guild.id}`)

if(args[0] === "sıfırla") {
    if(!sıfırla) {
      message.channel.send(new Discord.RichEmbed()
      .setDescription(`:hayir: | Mod Log Kanalı zaten ayarlı değil.`)
      .setColor("RED"))                     
      return
    }
    
    db.delete(`mlog_${message.guild.id}`)
    message.channel.send(new Discord.RichEmbed()
     .setDescription(`:white_check_mark:| Mod Log Kanalı başarıyla sıfırlandı.`)
      .setColor("GREEN"))                   
    return
  }


  
  if (!mlog) {
    return message.channel.send(new Discord.RichEmbed()
     .setDescription(`:x: | Mod Log Kanalı etiketlemelisin.`)
    .setColor("RED"))                          
  }
  
  
  
  
  db.set(`mlog_${message.guild.id}`, mlog.id)
  
   // message.channel.send(`Otorol \`${rol.name}\`, otorol kanalı ${rolk} olarak ayarlandı.`)
  
  const embed = new Discord.RichEmbed()
        .setDescription(`✅ Mod Log Kanalı başarıyla ${mlog} olarak ayarlandı.\nKanalı sıfırlamak için **!modlog sıfırla** yazabilirsiniz!`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['mod-log', 'modlog', 'setmodlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log-ayarla',
    description: 'mod log kanalını ayarlarsınız.',
    usage: 'mod-log-ayarla #kanal'
}