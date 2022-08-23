const express = require('express')
const Router = express.Router()
const authCheck = require('../middleware/authCheck')
const ctrl = require('../controllers/movie')
const upload = require('../middleware/upload')

Router.get('/detail', authCheck(), ctrl.GetMoviesDetail)
Router.get('/', authCheck(), ctrl.GetMoviesList)
Router.get('/search', authCheck(), ctrl.SearchMovie)
Router.get('/list', authCheck(), ctrl.Pagination)
Router.post('/', authCheck('admin'), upload.single('image'), ctrl.AddMovie)
Router.put('/:id', authCheck('admin'), ctrl.UpdateMovie)
Router.put('/images/:name', authCheck('admin'), upload.single('image'), ctrl.UpdateImage)
Router.delete('/:id', authCheck('admin'), ctrl.DeleteMovie)
Router.delete('/images/:name', authCheck('admin'), ctrl.DeleteImage)



module.exports = Router