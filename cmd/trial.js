const Discord = require("discord.js");

Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let date = new Date();
let trialFinish = date.addDays(2);
var d = trialFinish,
dformat = [d.getDate(),
       d.getMonth()+1,
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');

exports.run = (client, message, params) => {
    let trialembed = new Discord.RichEmbed()
        .setTitle("Premium activated")
        .setDescription("** Premium is activated for " + message.author.username + " ** ") /** ruser declares the user that was removed. **/
        .setColor("#3937a5")
        .attachFile('./assets/premium.png')
        .setThumbnail('attachment://premium.png', 300, 300)
        .addField("Time assigned:", message.createdAt, true)
        .addField("Lasts until: ", `${dformat}`, true)
    message.channel.send(trialembed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
  
exports.help = {
    name: "trial",
    description: "Start the trial for 2 days",
    usage: "trial"
};