class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

const ninja2 = new Ninja("Ryu");
ninja2.sayName().showStats().drinkSake().showStats();


class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name = name, health = 200, speed = 10, strength = 10);
        this.wisdom = 10;

    }
    // simple function in the child class
    speakWisdom() {
        // by using super, we can call the parent method
        super.drinkSake();
        console.log("There are no contests in the Art of Peace. A true warrior is invincible because he or she contests with nothing. Defeat means to defeat the mind of contention that we harbor within.");
    }
}
const sensei1 = new Sensei("John");
sensei1.speakWisdom();