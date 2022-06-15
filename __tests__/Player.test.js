const Player = require("../lib/Player");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion.js");

console.log(new Potion());

test("creates a player object", () => {
  const playerObject = new Player("Robert");
  expect(playerObject.name).toBe("Robert");
  expect(playerObject.health).toEqual(expect.any(Number));
  expect(playerObject.strength).toEqual(expect.any(Number));
  expect(playerObject.agility).toEqual(expect.any(Number));
  expect(playerObject.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("gets players stats as an object", () => {
  const player = new Player("Robert");
  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

test("gets inventory from player or returns false", () => {
  const player = new Player("Robert");
  expect(player.getInventory()).toEqual(expect.any(Array));
  player.inventory = [];
  expect(player.getInventory()).toEqual(false);
});

test("get player's health value", () => {
  const player = new Player("Robert");
  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

test("check if the player is alive or not", () => {
  const player = new Player("Robert");
  expect(player.isAlive()).toBeTruthy();
  player.health = 0;
  expect(player.isAlive()).toBeFalsy();
});

test("reduce the players health", () => {
  const player = new Player("Robert");
  const oldHealth = player.health;
  player.reduceHealth(5);
  expect(player.health).toBe(oldHealth - 5);
  player.reduceHealth(99999);
  expect(player.health).toBe(0);
});

test("retrieve the players attack value", () => {
  const player = new Player("Robert");
  player.strength = 10;
  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test("add a potion", () => {
  const player = new Player("Robert");
  const inventoryCount = player.inventory.length;
  player.addPotion(new Potion());
  expect(player.inventory.length).toBe(inventoryCount + 1);
});

test("use a potion", () => {
  const player = new Player("Robert");
  player.inventory = [new Potion(), new Potion(), new Potion()];
  const inventoryCount = player.inventory.length;
  player.usePotion(1);
  expect(player.inventory.length).toBe(inventoryCount - 1);
});
