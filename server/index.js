const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const app = express()
require('./models/db')
app.use(express.json())
app.use(cors(
    {
        origin : ["https://mern-todo-client-two.vercel.app"],
        methods: ["POST","GET","DELETE","PUT"],
        credentials: true
    }
))
app.use('/', router)

app.get('/',(req,res)=>{
    res.send("hello from server")
})
app.listen('8000', err =>{
    if(err) console.log(err);
    console.log("Server is running at port : 8000")
})
