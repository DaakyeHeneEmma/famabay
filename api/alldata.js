const cors = require('cors')
const { router, corsOptions, UserSchema } = require('../middlewares/alldataRouter')

const alldata = router.get('/', cors(corsOptions),(async(req,res)=>{
        await UserSchema.find({},{_id:0,__v:0}, (err,docs)=>{
          if(!err){
           res.json(docs)
           console.log("all entries");
          }else{console.log("error")}
        })
      })
)
module.exports = alldata;


