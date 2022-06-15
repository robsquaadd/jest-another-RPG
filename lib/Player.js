const Potion = require("./Potion");

function Player(string = "") {
  this.name = string;
  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);
  this.inventory = [new Potion("health"), new Potion()];
}

Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
};

Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  } else {
    return false;
  }
};

Player.prototype.getHealth = function () {
  return `${this.name}'s health is now ${this.health}`;
};

Player.prototype.isAlive = function () {
  if (this.health === 0) {
    return false;
  } else {
    return true;
  }
};

Player.prototype.reduceHealth = function (damage) {
  if (this.health < damage) {
    this.health = 0;
  } else {
    this.health -= damage;
  }
  return this.health;
};

Player.prototype.getAttackValue = function () {
  const min = this.strength - 5;
  const max = this.strength + 5;
  return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function (potionObject) {
  this.inventory.push(potionObject);
  return this.inventory;
};

Player.prototype.usePotion = function (potionIndex) {
  potionUsed = this.inventory.splice(potionIndex, 1)[0];
  switch (potionUsed.name) {
    case "agility":
      this.agility += potionUsed.value;
      break;
    case "strength":
      this.strength += potionUsed.value;
      break;
    case "health":
      this.health += potionUsed.value;
      break;
  }
};

module.exports = Player;
