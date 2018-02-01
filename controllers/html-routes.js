var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route that loads log-in.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../view/log-in.html"));

});

// sign up page route
// app.get("/sign-up", function(req, res){
//     res.sendFile(path.join(__dirname, "../view/sign-up.html"));
// });

// foodProvider page route
app.get("/foodProvider", function(req, res){
    res.sendFile(path.join(__dirname, "../view/foodProvider.html"));
});

app.get("/addItems", function(req, res){
    res.sendFile(path.join(__dirname, "../view/addItems.html"));
});

}