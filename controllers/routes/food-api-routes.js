let database = require("../../models")


module.exports = function(app){


    app.get('/api/fp/food/:id', function(req, res){

        let id = req.params.id

        console.log("This comes in here?? or no?")
        database.Food.findAll({
            where: {
                OrganizationId: id
            }
        }).then(function(foodList){

            console.log(foodList)

            res.json(foodList.dataValues)
        })
    })

    app.post('/api/fp/food/:id', function(req, res){
        

        let frozen = req.body.frozen
        let fresh = req.body.fresh
        let canned = req.body.canned
        let packaged = req.body.packaged
        let description = req.body.description

        //this has to be true all the time in here!
        let status = req.body.status
        let remaining = req.body.remaining
        let takenBy = null
        let OrganizationId = req.params.id

        database.Food.create({
            frozen: frozen,
            fresh: fresh,
            canned: canned,
            packaged: packaged,
            description: description,
            status: status,
            remaining: remaining,
            takenBy: takenBy,
            OrganizationId: OrganizationId
        }).then(function(createdFoodList){
            
            console.log(createdFoodList)
            res.json(createdFoodList)
        })
    })
}