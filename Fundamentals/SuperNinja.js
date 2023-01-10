class Sensei extends Ninja {
    constructor(health) {
        super("Sensei", health = 200, sped = 10, strength = 10);
        this.wisdom = this.wisdom;

    }
    // simple function in the child class
    speakWisdom() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log("There are no contests in the Art of Peace. A true warrior is invincible because he or she contests with nothing. Defeat means to defeat the mind of contention that we harbor within.");
    }
}
const Sensei = new Sensei("health");
Sensei.speakWisdom();