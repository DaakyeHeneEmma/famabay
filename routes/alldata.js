const { router, UserSchema } = require('../middlewares/routerConnection')

const alldata = router.get('/',async(req,res)=>{
        await UserSchema.find({}, (err,docs)=>{
          if(!err){
           res.json(docs)
          }else{console.log("error")}
        })
      })

module.exports = alldata;


