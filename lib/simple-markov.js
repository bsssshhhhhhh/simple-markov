let getRandomProperty = obj => {
  let keys = Object.keys(obj);
  let rand = Math.floor(Math.random() * keys.length);
  return keys[rand];
};
export default class SimpleMarkov {
  constructor(order, text) {
    this.order = order;
    this.markovTable = {};
    if (text) {
      this.learn(text);
    }
  }
  learn(text) {
    this.__updateTable(text);
  }
  generateText(length) {
    let phrase = getRandomProperty(this.markovTable);
    let allText = phrase;
    for (let i = 1; i < length / this.order; i++) {
      let newPhrase = this.__getNextPhrase(this.markovTable[phrase]);
      if (newPhrase === false) {
        phrase = getRandomProperty(this.markovTable);
      } else {
        phrase = newPhrase;
        allText += newPhrase;
      }
    }
    return allText;
  }
  __updateTable(inputText) {
    for (let i = 0; i < inputText.length; i++) {
      let phrase = inputText.substr(i, this.order);
      if (!this.markovTable[phrase]) {
        this.markovTable[phrase] = {};
      }
    }
    for (let i = 0; i < inputText.length - this.order; i++) {
      let phrase = inputText.substr(i, this.order);
      let nextPhrase = inputText.substr(i + this.order, this.order);
      if (this.markovTable[phrase] && this.markovTable[phrase][nextPhrase]) {
        this.markovTable[phrase][nextPhrase] += 1;
      } else {
        this.markovTable[phrase][nextPhrase] = 1;
      }
    }
  }
  __getNextPhrase(obj) {
    if (!obj) {
      return false;
    }
    let total = 0;
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      total += obj[keys[i]];
    }
    let rand = Math.floor(Math.random() * total);
    for (let i = 0; i < keys.length; i++) {
      if (rand <= obj[keys[i]]) {
        return keys[i];
      }
      rand -= obj[keys[i]];
    }
    return false;
  }
}
