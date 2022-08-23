const express = require('express')
const Router = express.Router()
const authCheck = require('../middleware/authCheck')
const ctrl = require('../controllers/schedule')

Router.get('/', authCheck(), ctrl.GetSchedule)
Router.get('/movie', authCheck(), ctrl.GetMovSchDetail)
Router.post('/', authCheck(), ctrl.AddSchedule)
Router.put('/update/:id', authCheck(), ctrl.UpdateSchedule)
Router.delete('/:id', authCheck(), ctrl.DeleteSchedule)

Router.get('/cinema', authCheck(), ctrl.GetCinema)
Router.post('/cinema', authCheck('admin'), ctrl.AddCinema)
Router.put('/cinema/update/:id', authCheck('admin'), ctrl.UpdateCinema)
Router.delete('/cinema/:id', authCheck('admin'), ctrl.DeleteCinema)

module.exports = Router