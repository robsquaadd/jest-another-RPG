const Potion = require("./Potion");

function Enemy(name = "", weapon = "") {
  this.name = name;
  this.health = Math.floor(Math.random() * 10 + 85);
  this.strength = Math.floor(Math.random() * 5 + 5);
  this.agility = Math.floor(Math.random() * 5 + 5);
  this.weapon = weapon;
  this.potion = new Potion();
}

Enemy.prototype.getHealth = function () {
  return `This ${this.name} has ${this.health} left.`;
};

Enemy.prototype.isAlive = function () {
  if (this.health === 0) {
    return false;
  } else {
    return true;
  }
};

Enemy.prototype.getAttackValue = function () {
  const min = 5;
  const max = 15;
  return Math.floor(Math.random() * (max - min) + min);
};

Enemy.prototype.reduceHealth = function (damage) {
  if (this.health < damage) {
    this.health = 0;
  } else {
    this.health -= damage;
  }
  return this.health;
};

Enemy.prototype.getDescription = function () {
  return `A ${this.name} with a ${this.weapon} appeared.`;
};
module.exports = Enemy;
