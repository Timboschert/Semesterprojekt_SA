const fetch = require('node-fetch');
const status = require('http-status-codes');

const AffordableUnitsCalculator = require('../model/AffordableUnitsCalculator');

module.exports = async (req, res) => {
    if (!req.query.age || !req.query.food || !req.query.wood || !req.query.stone || !req.query.gold) {
        return res.status(status.StatusCodes.BAD_REQUEST).end();
    }

    if (req.query.age != "Dark" && req.query.age != "Feudal" && req.query.age != "Castle" && req.query.age != "Imperial") {
        return res.status(status.StatusCodes.BAD_REQUEST).end();
    }

    const calculator = new AffordableUnitsCalculator(req.query.age, req.query.food, req.query.wood, req.query.stone, req.query.gold)

    let data = null
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/units"
    await fetch(url)
        .then(res => res.json())
        .then(json => data = json);

    calculator.calculateUnits(data.units)

    return res.status(status.StatusCodes.OK).json(calculator.affordableUnits).end();
}