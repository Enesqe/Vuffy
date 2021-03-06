const Discord = require('discord.js')
const fs = require('fs');
  const db = require('wio.db');

exports.run = async(client, message, args) => {
  if (!db.has(`premod_${message.guild.id}`) == true) {
    
      
      return message.channel.send(" Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")

    
  } else {
    let kullanıcı = await db.fetch(`ksistem_${message.guild.id}`);

  if( kullanıcı == undefined){
message.reply("**Kayıt komutları kapalı açmak için !kayıtsistemi aç**")
  }else{
      if( kullanıcı == "acik"){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  

  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply("Kanalı Etiketlemelisin Dostum.")
    }

  
    db.set(`kkanal_${message.guild.id}`, "<#"+channel.id+">")
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Başarılı: ${channel}`)
    .setColor("RANDOM")
    message.channel.send({embed})
}
  }
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-kanal'],
    permLevel: `yetkiyok`,

}

exports.help = {
    name: 'kayıtkanal',
    description: 'kayıt kanalını ayarlarsınız.',
    usage: 'kayıtkanal <#kanal>',

}