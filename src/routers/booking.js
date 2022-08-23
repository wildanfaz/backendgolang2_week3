const express = require('express')
const Router = express.Router()
const authCheck = require('../middleware/authCheck')
const ctrl = require('../controllers/booking')

Router.get('/', authCheck(), ctrl.GetBooking)
Router.post('/', authCheck(), ctrl.AddBooking)
Router.put('/:id', authCheck(), ctrl.UpdateBooking)
Router.delete('/:id', authCheck(), ctrl.DeleteBooking)

module.exports = Router