const fetch = require('node-fetch');
const status = require('http-status-codes');

const AffordableUnits = require('../model/AffordableUnits');

module.exports = async (req, res, next) => {
    if (!req.query.age || !req.query.food || !req.query.wood || !req.query.stone || !req.query.gold) {
        return res.status(status.StatusCodes.BAD_REQUEST).end();
    }

    const test = new AffordableUnits(req.query.food, req.query.wood, req.query.stone, req.query.gold)
    console.log(test)

    console.log(req.query)

    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/units"

    let data = null
    await fetch(url)
        .then(res => res.json())
        .then(json => data = json);

    test.add(data.units)

    return res.status(status.StatusCodes.OK).json(data).end();
}