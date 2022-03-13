const cors = require('cors')
const { router, corsOptions, UserSchema } = require('../middlewares/alldataRouter')

// finding all users in the database
const alldata = router.get('/', cors(corsOptions),(async(req,res)=>{
        await UserSchema.find({},{_id:0,__v:0}, (err,docs)=>{
          if(!err){
           res.json(docs)
           console.log("all entries");
          }else{console.log("error")}
        }).sort({ metacritic: -1 });
      })
)
module.exports = alldata;


