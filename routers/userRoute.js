const userCtrl = require('../controllers/userCtrl')

const router = require('express').Router()


router.post('/user/register/',userCtrl.register)
router.post('/user/login/',userCtrl.login)


module.exports = router