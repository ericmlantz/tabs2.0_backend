const router = require('express').Router()
const controller = require('../controllers/SearchController')

router.post('/create', controller.CreateSearch)  //CREATE SEARCH
router.get('/all', controller.GetAllSearches)    //GET ALL SEARCHES
router.get('/:pk', controller.GetSearchByPk)        //GET SEARCH BY PK
router.put('/update/:pk', controller.UpdateSearch)     //UPDATE A SEARCH
router.delete('/delete/:pk', controller.DeleteSearch) //DELETE A SEARCH

module.exports = router