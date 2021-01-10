
const newsCtrl = require('../controllers/newsCtrl')

const router = require('express').Router()


router.get('/',newsCtrl.getNews)
router.post('/',newsCtrl.createNews)


router.put('/:id',newsCtrl.updateNews)
router.delete('/:id',newsCtrl.deleteNews)

module.exports = router


