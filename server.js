const express = require("express")
const app = express()
const port = 3000;
const {Restaurant, Menu, Item} = require("./models/index")
const {sequelize} = require("./db")

//TODO: 

app.get('/restaurants/:id' , async (req, res) => {
let restaurants = await Restaurant.findByPk(req.params.id)
let menus = await Menu.findByPk(req.params.id)
let items = await Item.findByPk(req.params.id)
res.send(restaurants + ', ' + menus + ', ' + items)
})


app.listen(port, () => {
    sequelize.sync()
    console.log("App listening on port " + port)
})