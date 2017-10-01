module.exports = class osuprofile {

    static match(message) {
        return message.content.startsWith('kat!osuProfile')
    }

    static action(message) {
        let args = message.content.split(' ')
        args.shift()
        message.reply('http://lemmmy.pw/osusig/sig.php?colour=pink&uname=' + args.join('%20') + '&countryrank&flagstroke&onlineindicator=undefined&xpbar')

    }
}