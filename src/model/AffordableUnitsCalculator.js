const Resource = require('./Resource')
const Ages = require('./Ages')
const AffordableUnit = require('./AffordableUnit')

class AffordableUnitsCalculator {
    constructor(age, availableFood, availableWood, availableStone, availableGold) {
        this.ages = new Ages(age)

        this.avaiableResources = new Map();
        this.avaiableResources.set("Food", parseInt(availableFood))
        this.avaiableResources.set("Wood", parseInt(availableWood))
        this.avaiableResources.set("Stone", parseInt(availableStone))
        this.avaiableResources.set("Gold", parseInt(availableGold))

        this.affordableUnits = []
    }

    calculateUnits(units) {
        for (let unit of units) {
            const { cost } = unit
            let resources = []

            if (!this.ages.getAge(unit.age)) {
                continue
            }

            if (cost["Food"] == undefined && cost["Wood"] == undefined && cost["Stone"] == undefined && cost["Gold"] == undefined) {
                continue
            }

            if (cost["Food"] != undefined) {
                resources.push(new Resource("Food", cost["Food"]))
            }
            if (cost["Wood"] != undefined) {
                resources.push(new Resource("Wood", cost["Wood"]))
            }
            if (cost["Stone"] != undefined) {
                resources.push(new Resource("Stone", cost["Stone"]))
            }
            if (cost["Gold"] != undefined) {
                resources.push(new Resource("Gold", cost["Gold"]))
            }

            let affordableUnits = Number.MAX_VALUE
            for (let resource of resources) {
                let affordableUnitsForResource = Math.floor(this.avaiableResources.get(resource.type) / resource.value)
                if (affordableUnits > affordableUnitsForResource) {
                    affordableUnits = affordableUnitsForResource
                }
            }
            unit["affordableUnits"] = affordableUnits

            for (let resource of resources) {
                unit["remaining" + resource.type] = this.avaiableResources.get(resource.type) - (resource.value * affordableUnits)
            }

            for (let key of this.avaiableResources.keys()) {
                if (unit["remaining" + key] == undefined)
                    unit["remaining" + key] = this.avaiableResources.get(key)
            }

            this.affordableUnits.push(new AffordableUnit(unit.id, unit.name, unit.description, unit.expansion, unit.age, unit.created_in, cost, unit.affordableUnits, unit.remainingFood, unit.remainingWood, unit.remainingStone, unit.remainingGold))
        }
    }
}

module.exports = AffordableUnitsCalculator