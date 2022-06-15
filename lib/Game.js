const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

Game.prototype.initializeGame = function () {
  this.enemies.push(
    new Enemy("goblin", "sword"),
    new Enemy("orc", "baseball bat"),
    new Enemy("skeleton", "axe")
  );
  this.currentEnemy = this.enemies[0];
  inquirer
    .prompt({
      type: "text",
      name: "playerName",
      message: "What is your name?",
    })
    .then(({ name }) => {
      this.player = new Player(name);
    });
  console.log(this.currentEnemy, this.player);
};

module.exports = Game;
