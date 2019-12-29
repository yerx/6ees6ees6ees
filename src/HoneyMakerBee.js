class HoneyMakerBee extends Bee {
  constructor(color, food) {
    super(color, food);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  eat() {
    super.eat();
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
};
