import  express  from "express"
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app= express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static("public"));
var items =[]
mongoose.connect('mongodb+srv://pinnukoushik1:koushik2004@koushik.jttd3u3.mongodb.net/pointstable');
const playerschema = mongoose.Schema({
    name:String,
    kills:Number,
    team :String
})

const playermodel = mongoose.model("players",playerschema)


app.use(cors())

var x=0,y=0

app.post("/add",function (req, res) { 
      x= Number(req.body.a)
      y= Number(req.body.b)
      console.log(x,y)
      res.redirect("http://localhost:3000")
    })

app.get("/add" , (req, res)=>{
  res.send(x+y+" ")
})    

app.get("/getdata", function (req, res) { 
   playermodel.find().then((arr)=>{
    console.log(arr)
    res.send(arr)
   })
 })

app.listen(5000,  ()=> { console.log("hloo") })