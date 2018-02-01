let express = require('express')
let bodyParser = require('body-parser')


let app = express()
const PORT = process.env.PORT || 5000

let database = require('./models')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))


//If there is more routes then you can add more~

//require('./controls/routes/routes.js')(app)
//require('./controls/routes/routes.js')(app)
//require('./controls/routes/routes.js')(app)

database.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function() {
        console.log(`App is listening on PORT: ${PORT}`)
    })
})