const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')



const app = express();

app.use(cors())

// iska use nhi krenge to req.bdy undefined aayegi
app.use(express.json())

//dummy rout
app.get('/',(req , res)=>{
    res.send('Hello word')
})
// koi bhi request aayegi jo ai se strt hoti h vo airoutes me chli jayegi
app.use('/ai',aiRoutes)
module.exports = app