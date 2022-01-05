const { router, UserSchema, app } = require('../middlewares/createRouter')

router.use('/alldata', require('../api/alldata'))
router.use('/posts', require('../api/posts'))
router.use('/create', require('../api/create'))
router.use('/delete', require('../api/delete'))


module.exports = router;