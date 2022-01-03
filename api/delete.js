const { router, UserSchema } = require('../middlewares/createRouter')

//a single post to delete
router.delete('/',async(req,res,next)=>{
        const {name} = req.body
        const allUser = await UserSchema.find({})
        const data = await new UserSchema({name})
//get the name of the post
        await UserSchema.findOneAndDelete({name:data.name}, (err,docs)=>{
            if(!err){
                res.send(docs)
                console.log(docs)
                console.log("item deleted")
            }
        })
        
      next(); 
})

module.exports = router