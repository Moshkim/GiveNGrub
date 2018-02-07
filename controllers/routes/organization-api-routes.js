

let database = require("../../models")

module.exports = function(app){

    app.get('/api/id', function(req,res){

        database.Organization.findOne({
            where: {
                email: req.query.email,
                password: req.query.password
            }
        }).then(function(result){

            res.json(result)
            console.log("\n\nwe comes in here!!!\n\n")
        })
    
    })

    app.post('/api/register', function(req, res){
        database.Organization.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            company_name: req.body.organization,
            contact: req.body.maincontact,
            address: req.body.formattedAddress,
            place_id: req.body.place_id,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            entity: req.body.entity,
            capacity: req.body.capacity

        }).then(function(result){
            res.json(result)
            console.log("New User is added to database!")
        })
    })
}