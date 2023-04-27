const houses = require('./db.json');
let id = 4; 

module.exports = {

     getHouses: (req, res) => res.status(200).send(houses),

    deleteHouse: (req, res) => {
        let index = houses.findIndex(el =>el.id === +req.params.id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        let {address, price, imageURL } = req.body
        let newHouse = {
            id: id, 
            address,
            price, 
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        id++
    },

    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(el => +el.id === +id)
        console.log(index)
        if(type === `plus`){
            houses[index].price+=10000

        }
        else if(type === `minus`){
            houses[index].price -=10000
            console.log(`minus`)
        }
        else {
            res.sendStatus(400)
            return
        }
        res.status(200).send(houses)
    }
}

