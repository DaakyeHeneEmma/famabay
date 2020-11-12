const express = require('express')

const app = express();
const PORT = process.env.PORT || 2000

app.get('/', (req,res)=>{
    res.send('hello from here');
    res.end();

})

app.listen(PORT, ()=>{
    console.log('server connected');
})