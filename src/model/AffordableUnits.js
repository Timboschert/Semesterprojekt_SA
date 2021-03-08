class AffordableUnits {
    constructor(availableFood, availableWood, availableStone, availableGold) {
        this.availableFood = parseInt(availableFood);
        this.availableWood = parseInt(availableWood);
        this.availableStone = parseInt(availableStone);
        this.availableGold = parseInt(availableGold);
    }

    add(units) {
        for (let unit of units) {
            let unitCounter = 0
            let remainingFood = 0
            let remainingWood = 0
            let remainingStone = 0
            let remainingGold = 0

            let neededFood = 0
            let neededWood = 0
            let neededStone = 0
            let neededGold = 0

            if (unit.cost["Food"] == undefined && unit.cost["Wood"] == undefined && unit.cost["Stone"] == undefined && unit.cost["Gold"] == undefined) {
                continue
            }

            if (unit.cost["Food"] != undefined) {
                remainingFood = this.availableFood
                neededFood = unit.cost["Food"]
            }
            if (unit.cost["Wood"] != undefined) {
                remainingWood = this.availableWood
                neededWood = unit.cost["Wood"]
            }
            if (unit.cost["Stone"] != undefined) {
                remainingStone = this.availableStone
                neededStone = unit.cost["Stone"]
            }
            if (unit.cost["Gold"] != undefined) {
                remainingGold = this.availableGold
                neededGold = unit.cost["Gold"]
            }

            // can be done without a loop
            // available resources = resources per unit * x -> x = avaiable resources / resources per unit
            let areResourcesRemaining = true
            while (areResourcesRemaining) {
                remainingFood -= neededFood
                remainingWood -= neededWood
                remainingStone -= neededStone
                remainingGold -= neededGold
                if (remainingFood >= 0 && remainingWood >= 0 && remainingStone >= 0 && remainingGold >= 0) {
                    unitCounter++
                } else {
                    areResourcesRemaining = false
                }
            }

            unit["amount"] = unitCounter
            unit["remainingFood"] = remainingFood + neededFood
            unit["remainingWood"] = remainingWood + neededWood
            unit["remainingStone"] = remainingStone + neededStone
            unit["remainingGold"] = remainingGold + neededGold
        }
    };

}

module.exports = AffordableUnits;