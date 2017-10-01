const Discord = require('discord.js');
const bot = new Discord.Client();
const Mastery = require('./commands/mastery');
const opgg = require('./commands/opgg');
const osuprofile = require('./commands/osuProfile');
const youtube = require('./commands/youtube');
var prefix = ("kat!");



bot.on('ready', function () {
    bot.user.setGame('WIP kat!help').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the ARMY , ${member}`);
  });


bot.on('message', message => {

    if(Mastery.match(message)) {
        return Mastery.action(message)
    }
    if(opgg.match(message)) {
        return opgg.action(message)
    }
    if(osuprofile.match(message)) {
        return osuprofile.action(message)
    }
    if(youtube.match(message)) {
        return youtube.action(message)
    }
    if (message.content == prefix + "avatar") {
        message.reply(message.author.avatarURL);
      }
    if(message.content == "hey"){
        message.reply("Hey !");
    }

    if(message.content == prefix + "help"){
        message.channel.sendMessage("╔════════════𝓚𝓪𝓽𝓪𝓻𝓲𝓷𝓪 𝓑𝓸𝓽 𝓒𝓸𝓶𝓶𝓪𝓷𝓭═════════════╗\n╫kat!help : Show every available commands\n║\n╫kat!mastery [ign] : show your 3 first champs with their mastery level\n║\n╫kat!opgg [ign] : show your opgg profile\n║\n╫kat!osuProfile [ign] : show your osu! profile\n║\n╫kat!avatar : gives you your profile picture\n╚═══════════════════════════════════════════╝") 
    }

});


bot.login('MzYyMzI3MjEzMzQ2OTE0MzA3.DK_row.j3hk4E1Zdj-YLwg4UrgG5lowxGQ');