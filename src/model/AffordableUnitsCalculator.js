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

            // include all units which are the same age or the age/ages before this
            if (!this.ages.getAge(unit.age)) {
                continue
            }

            // check if this unit is a special unit with no resources
            if (cost["Food"] == undefined && cost["Wood"] == undefined && cost["Stone"] == undefined && cost["Gold"] == undefined) {
                continue
            }

            // add the unit resources to the resources list
            for (const [key, value] of Object.entries(cost)) {
                resources.push(new Resource(key, value))
            }

            let affordableUnits = Number.MAX_VALUE
            for (let resource of resources) {
                // calculate the affordable units based on the resource
                let affordableUnitsForResource = Math.floor(this.avaiableResources.get(resource.type) / resource.value)

                /**
                 * the amount per unit for this resource which is the lowest is needed
                 * if the value of Food is higher than gold, then the affordable amout bases on the food should be used 
                 */
                if (affordableUnits > affordableUnitsForResource) {
                    affordableUnits = affordableUnitsForResource
                }
            }
            unit["affordableUnits"] = affordableUnits

            // add the remaining resources which the unit needs to the response object
            for (let resource of resources) {
                unit["remaining" + resource.type] = this.avaiableResources.get(resource.type) - (resource.value * affordableUnits)
            }

            // add the remaining resources which the unit does not need to the response object
            for (let key of this.avaiableResources.keys()) {
                if (unit["remaining" + key] == undefined)
                    unit["remaining" + key] = this.avaiableResources.get(key)
            }

            this.affordableUnits.push(new AffordableUnit(unit.id, unit.name, unit.description, unit.expansion, unit.age, unit.created_in, cost, unit.affordableUnits, unit.remainingFood, unit.remainingWood, unit.remainingStone, unit.remainingGold))
        }
    }
}

module.exports = AffordableUnitsCalculator