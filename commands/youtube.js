module.exports = class Youtube {

    static match(message) {
        return message.content.startsWith('kat!youtube')
    }

    static action(message) {
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://www.youtube.com/results?search_query=' + args.join('%20'))

    }
}