const express =  require("express")
const app = express()

const port = 3000

app.get('/', (req, res)=>{res.send("<p>Wazzup the world</p>")})

app.listen(port, ()=>{console.log(`port: ${port}`)})