const express = require('express');
const status = require('http-status-codes');
const app = express();

const router = express.Router(express);

app.use("/aoe-units-analyzer", router);

require("./src/Routes.js")(router);

app.use((err, req, res, next) => {
    global.logger.error('An error has occoured ' + err);
    res.status(status.StatusCodes.INTERNAL_SERVER_ERROR).end();
});

const port = 8081
app.listen(port, () => {
    console.log("Server has started on port: " + port);
});