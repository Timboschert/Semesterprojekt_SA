const express = require('express');
const status = require('http-status-codes');
const app = express();

const router = express.Router(express);

app.use("/aoe-units-analyzer", router);

require("./src/routes/Routes")(router);

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(status.StatusCodes.INTERNAL_SERVER_ERROR).end();
});

const port = 9000
app.listen(port, () => {
    console.log("Server has started on port: " + port);
});