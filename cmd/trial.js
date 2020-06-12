const Discord = require("discord.js");
const log = require('../logger')
const Post = require('../models/Post')

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

    let trialuser = new Discord.RichEmbed()
        .setTitle("Already a premium member!")

    let member = message.member
    if (!member.roles.has(process.env.MEMBER_ROLE_ID)) {
        member.addRole(process.env.MEMBER_ROLE_ID)
        .then(() => {
            member.guild.channels.find(channel => channel.id === process.env.WELCOME_CHANNEL_ID)
                .send(trialembed)

            Post.findOneAndUpdate(
                { discordId: member.id }, 
                { $set: { expirationDate: trialFinish }}, 
                { upsert: true, new: true }, 
                (err) => {
                    console.log(err)
                })
                .then((doc) => {
                    console.log(doc)
            })
        }).catch((error) => log(error))
    }
    else {
        member.guild.channels.find(channel => channel.id === process.env.WELCOME_CHANNEL_ID)
            .send(trialuser)
    }
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