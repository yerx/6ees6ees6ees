class ForagerBee extends Bee {
  constructor(color, food) {
    super(color, food);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  eat () {
    super.eat();
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
