module.exports = class Mastery {

    static match(message) {
        return message.content.startsWith('kat!mastery')
    }

    static action(message) {
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://www.masterypoints.com/image/profile/' + args.join('%20') +'/euw')

    }
}