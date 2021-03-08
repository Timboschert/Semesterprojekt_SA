const fetch = require('node-fetch');
const status = require('http-status-codes');

const AffordableUnits = require('../model/AffordableUnits');

module.exports = async (req, res, next) => {
    if (!req.query.food || !req.query.age) {
        return res.status(status.StatusCodes.BAD_REQUEST).end();
    }

    const test = new AffordableUnits()
    console.log(test)

    console.log(req.query)

    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/units"

    let data = null
    await fetch(url)
        .then(res => res.json())
        .then(json => data = json);

    console.log(data.units[0])

    return res.status(status.StatusCodes.OK).json(data).end();
}