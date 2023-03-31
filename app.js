const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const PORT = 3000 || xyz

let items = []

app.get("/", function(req, res){
    
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US",options)
    res.render("list",{today: day, newListItems: items})
});

app.post("/",function(req, res){
   let item = req.body.newItem;
   items.push(item);
   res.redirect("/");
});

app.listen(PORT, function(){
    console.log("Listening on port 3000")
})