

let database = require("../../models")

module.exports = function(app){

    app.get('/api/id', function(req,res){


        console.log("we comes in here!!!12345")
        database.Organization.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(function(result){
            console.log(result)
            res.json(result)
        })
    
    })
}