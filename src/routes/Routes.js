module.exports = (app) => {
    app.get("/units/affordable", require('../handler/AffordableUnitsHandler'));
};
