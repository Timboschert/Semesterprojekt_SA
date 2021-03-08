var express = require('express');
const fetch = require('node-fetch');

var app = express();
app.use(express.json());

app.get('/units/affordable', async function (req, res) {
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/units"

    let data = null
    await fetch(url)
        .then(res => res.json())
        .then(json => data = json);

    res.status(200).send(data);
})

app.listen(8081, function () {
    console.log("Server has started.")
})