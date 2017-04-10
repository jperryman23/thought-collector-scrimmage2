var express = require("express");
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000

var app = express();
// create application/json parser;
var jsonParser = bodyParser.urlencoded({extended: false})

// use nodemon to keep server running with live updates

app.listen(port, function() {
  console.log('Listening on port 3000');
});


app.use(express.static('public'));
app.set('view engine', 'hbs')
//
// // var userName = [
// //     {name: "Jules"},
// //     {name: "Peter"},
// //     {name: "Derek"}
// // ]
// //
// //
// app.get("/", function(req, res){
//     res.render("index", {instructors: userName,
//     title: "site"})
// })

// --> USE W/OUT BodyParser -->
// app.post('/results',function(req, res){
// console.log(req.query);
// res.render('results' , req.query)
// })

app.post('/results', jsonParser, function(req, res){
console.log(req.body);
res.render('results', req.body)
})
