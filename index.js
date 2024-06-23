import axios from "axios";
import bodyParser from "body-parser";
import express from "express";


let app=express();
let port=3000;
const API_Url="https://v2.jokeapi.dev/joke/";
const type="?type=single";
app.use(express.static("public"));
app.get('/',async(req,res)=>{ 
    res.render("index.ejs");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/programming",async(req,res)=>{
    let result= await axios.get(API_Url+"Programming"+type);
    let joke=result.data.joke
    res.render("index.ejs",{secret:joke});
});
app.post("/misc",async(req,res)=>{
    let result= await axios.get(API_Url+"Miscellaneous"+type);
    let joke=result.data.joke
    res.render("index.ejs",{secret:joke});
})

app.post("/dark",async(req,res)=>{
    let result= await axios.get(API_Url+"Dark"+type);
    let joke=result.data.joke
    res.render("index.ejs",{secret:joke});
})

app.post("/pun",async(req,res)=>{
    let result= await axios.get(API_Url+"Pun"+type);
    let joke=result.data.joke
    res.render("index.ejs",{secret:joke});
})

app.post("/spooky",async(req,res)=>{
    let result= await axios.get(API_Url+"Spooky");
    let joke=result.data.setup+" "+result.data.delivery;
    res.render("index.ejs",{secret:joke});
})

app.listen(port);
