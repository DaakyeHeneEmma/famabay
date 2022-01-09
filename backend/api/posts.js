const { router, UserSchema, app } = require('../middlewares/postRouter')
 const bcrypt = require("bcrypt")

 const posts = router.post("/", async(req,res)=>{
    try {
      
      const {name,age,course}= req.body
      const hash = await bcrypt.hash(course, 10)
      console.log(hash)
      const data = await new UserSchema({ name,age,hash})
      
      data.save().then((result)=>{
        console.log(result)
        res.send(result)
        console.log('item inserted')
      })
 
    } catch(error) {
      console.log(error.massage);
    }
  })
module.exports = posts;