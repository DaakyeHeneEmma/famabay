const { router, UserSchema } = require('../middlewares/newware')

const create = router.get('/', async(req,res,next)=>{
  const user = await new UserSchema({
    name: "ama",
    age: 30,
    course: "metaverse"
  })
  user.save().then((result)=>{
    res.send(result)
    console.log(result);
  }).catch(err=>console.log(err))
  next()
})

module.exports = create