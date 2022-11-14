function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
class Message {
    constructor(author, time, text) {
        this.author = author
        this.time = time
        this.text = text
    }
    toString() {
        return `${this.time} ${this.author}:${this.text}`
    }
}
class Messenger {
    constructor(){
        this.history = [];
    }
    send (author, text)
    {
        let time = gettime()
        let message = new Message(author, time, text)
        this.history.push(message)
    }
    show_history (){
        this.history.forEach(item =>
            console.log(item.toString())
        )
    }
}

let messenger = new Messenger()
messenger.send('Артем', 'Первое сообщение')
messenger.send('Мария', 'Второе сообщение')
messenger.show_history()