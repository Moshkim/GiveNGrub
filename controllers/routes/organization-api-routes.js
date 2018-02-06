

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
}