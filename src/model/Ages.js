class Age {
    constructor(age) {
        this.currentAge = age

        this.ages = new Map();
        this.ages.set("Dark", 0);
        this.ages.set("Feudal", 1);
        this.ages.set("Castle", 2);
        this.ages.set("Imperial", 3);
    }

    getAge(age) {
        return this.ages.get(age) <= this.ages.get(this.currentAge)
    }
}

module.exports = Age;