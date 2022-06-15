const Enemy = require("../lib/Enemy");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion.js");

test("creates an enemy object", () => {
  const enemy = new Enemy("goblin", "sword");
  expect(enemy.name).toBe("goblin");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
  expect(enemy.weapon).toBe("sword");
});

test("get enemy's health value.", () => {
  const enemy = new Enemy("goblin", "sword");
  expect(enemy.getHealth()).toEqual(
    expect.stringContaining(enemy.health.toString())
  );
});

test("check if the enemy is alive", () => {
  const enemy = new Enemy("goblin", "sword");
  expect(enemy.isAlive()).toBeTruthy();
  enemy.health = 0;
  expect(enemy.isAlive()).toBeFalsy();
});

test("get enemy's attack value", () => {
  const enemy = new Enemy("goblin", "sword");
  enemy.strength = 10;
  expect(enemy.strength).toBeGreaterThanOrEqual(5);
  expect(enemy.strength).toBeLessThanOrEqual(15);
});

test("subtract from enemy health", () => {
  const enemy = new Enemy("goblin", "sword");
  const oldHealth = enemy.health;
  enemy.reduceHealth(5);
  expect(enemy.health).toBe(oldHealth - 5);
  enemy.reduceHealth(99999);
  expect(enemy.health).toBe(0);
});

test("gets a description of the enemy", () => {
  const enemy = new Enemy("goblin", "sword");
  expect(enemy.getDescription()).toEqual(expect.stringContaining("goblin"));
  expect(enemy.getDescription()).toEqual(expect.stringContaining("sword"));
});
