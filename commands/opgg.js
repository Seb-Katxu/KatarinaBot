module.exports = class opgg {

    static match(message) {
        return message.content.startsWith('kat!opgg')
    }

    static action(message) {
        let args = message.content.split(' ')
        args.shift()
        message.reply('http://euw.op.gg/summoner/userName=' + args.join('%20'))

    }
}