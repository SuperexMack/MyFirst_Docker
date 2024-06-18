const express = require("express")
const app = express()
const PORT = 5000

app.get("/UserInfo" , (req,res)=>{
    res.json({
        msg:"Server created :)"
    })
})

app.listen(PORT , ()=>{
    console.log(`your server is running on the port Number ${PORT}`)
})