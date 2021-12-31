const { router, UserSchema, app } = require('../middlewares/createRouter')
 

 const posts = router.post("/", async(req,res)=>{
  // app.post("/", async(req,res)=>{
      const {name,age,course}= req.body
      const data = await new UserSchema({name,age,course})
      data.save().then((result)=>{
        console.log(result)
        res.send(result)
      })
    // })
      
    })

module.exports = posts;