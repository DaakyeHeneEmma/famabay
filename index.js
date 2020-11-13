
const express = require('express')

const app = express();
const PORT = process.env.PORT || 2000

express.json([
    limit = '95kb'
])

app.get('/', (_,res,next)=>{
    res.status(200).contentType('application/json')
    .cookie('rememberme', '1', 
    {expires:new Date(Date.now() + 4000), httpOnly: true});
    res.send('hello from here! coming from vsCode');
    res.end();
    next();
})

app.listen(PORT, ()=>{
    console.table([
        {path: `http://127.0.0.1`, port: `${PORT}`,index: 01}
    ])
})