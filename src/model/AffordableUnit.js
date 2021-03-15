class AffordableUnit {
    constructor(id, name, description, expansion, age, createdIn, cost, affordableunits, remainingFood, remainingWood, remainingStone, remaningGold) {
        this.id = id
        this.name = name
        this.description = description
        this.expansion = expansion
        this.age = age
        this.createdIn = createdIn
        this.cost = cost
        this.affordableunits = affordableunits
        this.remainingFood = remainingFood
        this.remainingWood = remainingWood
        this.remainingStone = remainingStone
        this.remaningGold = remaningGold
    }
}

module.exports = AffordableUnit;