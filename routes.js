var express = require("express");
var router = express.Router();

//select
router.get("/", (req, res) => {
    res.send(JSON.stringify({ id: 123, name: 'satish' }));
});
//insert
router.post("/pt/:id/:name/:email", (req, res) => {
    const obj = { id: req.params.id, name: req.params.name, email: req.params.email };
    res.send(JSON.stringify(obj));
});
//update
router.put("/", (req, res) => {
    res.send(JSON.stringify("Put"))
});
//delete
router.delete("/", (req, res) => {
    res.send(JSON.stringify("Delete"))
});

module.exports = router;