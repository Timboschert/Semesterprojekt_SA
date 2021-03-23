const fetch = require('node-fetch')
const status = require('http-status-codes')

const Ages = require('../model/Ages')
const AffordableUnitsCalculator = require('../model/AffordableUnitsCalculator')

module.exports = async (req, res) => {
    const { age, food, wood, stone, gold } = req.query

    if (!age || !food || !wood || !stone || !gold || isNaN(food) || isNaN(wood) || isNaN(stone) || isNaN(gold)) {
        return res.status(status.StatusCodes.BAD_REQUEST).end()
    }

    helper = new Ages(null)
    if (!helper.ages.has(age)) {
        return res.status(status.StatusCodes.BAD_REQUEST).end()
    }

    const calculator = new AffordableUnitsCalculator(age, food, wood, stone, gold)

    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/units"
    await fetch(url)
        .then(res => res.json())
        .then(json => calculator.calculateUnits(json.units))

    return res.status(status.StatusCodes.OK).json(calculator.affordableUnits).end()
}