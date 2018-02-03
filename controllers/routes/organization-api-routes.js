

let database = require("../../models")

module.exports = function(app){

    app.get('/api/id', function(req,res){

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