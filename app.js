var express = require("express");
var app = express();
var routes = require('./routes');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/data", routes);

app.listen(3000, () => {
    console.log("Up");
});
