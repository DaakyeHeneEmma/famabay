const express = require('express');

const routes = express();

routes.use(express.json)

routes.get('/', (req,res,next)=>{
    res.headers({status:200});
    res.send("the peoples homepage");
    next();
})

module.exports = routes;