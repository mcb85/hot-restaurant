var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route first to the AJAX home Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// route to the reservations page
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// route to the tables/waitlist page
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});