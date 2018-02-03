
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/signin.html"));
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/signup.html"));
    });

    app.get("/signin", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/signin.html"));
    });

    app.get("/fp/foodprovider", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/foodprovider.html"));
    });

    app.get("/np/nonprofit", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/nonprofit.html"));
    });

    app.get("/np/profile", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/profile.html"));
    });

};
