import express from "express"
import {userRouter} from "./users/users.js"
import getTime from "./getTime.js";
const host = "127.0.0.1"
const port = 8000
const app = express()

app.listen(port, ()=>{
    getTime()
    console.log(`server express start http://localhost:${[port]}`)
})
app.use('/users',userRouter)

app.get('/hello',(req, res)=>{
    res.end()
})


