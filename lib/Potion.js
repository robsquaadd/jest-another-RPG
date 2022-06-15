function Potion(string) {
  this.types = ["strength", "agility", "health"];
  this.name =
    string || this.types[Math.floor(Math.random() * this.types.length)];
  if (this.name === "health") {
    this.value = Math.floor(Math.random() * 10 + 30);
  } else {
    this.value = Math.floor(Math.floor() * 5 + 7);
  }
}

module.exports = Potion;
