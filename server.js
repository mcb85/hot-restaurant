var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [
    {
        "customerName": "Omar Ibrahim",
        "phoneNumber": "919-111-1111",
        "customerEmail": "aibrahi3@ncsu.edu",
        "customerID": "omar1"
    },
    {
        "customerName": "Jonathan Handy",
        "phoneNumber": "9195591806",
        "customerEmail": "jhandy4@gmail.com",
        "customerID": "3333"
    },
    {
        "customerName": "Bob",
        "phoneNumber": "123",
        "customerEmail": "sadf@.com",
        "customerID": "123456"
    }
]

let waitList = [
    
];

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

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.customerID.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    if (tables.length <= 5) {
        tables.push(newReservation);
    }
    else {
        waitList.push(newReservation);
    }
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });