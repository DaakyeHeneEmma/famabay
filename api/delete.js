const { router, UserSchema } = require('../middlewares/createRouter')

router.delete('/',async(req,res,next)=>{
    // res.send("delete")
        const {name} = req.body
        const allUser = await UserSchema.find({})
        const data = await new UserSchema({name})
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