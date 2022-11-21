const express = require("express") 
const bodyParser=require("body-parser") 
const ejs=require("ejs") 
var items=[]; 
var item=""; 
 
const app = express() 
app.use(bodyParser.urlencoded({extended:true})) 
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs'); 
app.get("/",(req,res)=>{ 
    var d=new Date(); 
    var d1=d.getDay(); 
    // var d3=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear(); 
    var days=["SUNDAY","MONDAY","TUESDAY","THURSDAY","FRIDAY","SATURDAY"] 
    res.render("index",{today:days[d1],newitem:items}) 
 
}) 
 
app.post("/",(req,res)=>{ 
    item=req.body.new; 
    console.log(item); 
    items.push(item) 
    res.redirect("/") 
}) 

const PORT = 4500; 
 
app.listen(PORT,()=> { 
    console.log(`server is running on port ${PORT}`); 
})