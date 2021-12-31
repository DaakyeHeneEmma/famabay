const { router, UserSchema } = require('../middlewares/routerConnection')

const alldata = router.delete('/',async(req,res,next)=>{
        const {name} = req.body
        const allUser = await UserSchema.find({})
        const data = await new UserSchema({name})
        await UserSchema.findOneAndDelete({name:data.name}, (err,docs)=>{
            if(!err){
                res.send(docs)
                console.log(docs)
            }
        })
        
      next(); 
})

module.exports = alldata;