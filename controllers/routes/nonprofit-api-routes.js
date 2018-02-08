
let database = require("../../models")

module.exports = function(app){
    app.get('/api/np/foodlist', function(req, res){

        database.Food.findAll({
            where: {
                status: false,
                state: req.query.state,
                city: req.query.city
            },
            include: [{
                model: database.Organization,
                attributes: ['company_name', 'contact', 'address', 'latitude', 'longitude', 'rating']
            }]
        }).then(function(foodList){
            console.log(foodList)
            res.json(foodList)
        })
    })
}