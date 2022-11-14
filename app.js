class Message {
  constructor(author, text) {
    this.author = author;
    this.text = text;
    this.time = this.gettime();
  }
  gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
  toString() {
    return `${this.time} ${this.author}: ${this.text}`;
  }
}
class Messenger {
  arr = [];
  send(author, text) {
    let msg = new Message(author, text);
    let result = `${msg.time} ${msg.author}: ${msg.text}`;
    this.arr.push(result);
    return result;
  }
  show_history() {
    this.arr.forEach((chat) => {
      console.log(chat);
    });
  }
}
let messenger = new Messenger();
messenger.send("Adil", "İlk mesaj");
messenger.send("Məryəm", "İkinci mesaj");
messenger.show_history();
