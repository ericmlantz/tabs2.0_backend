const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const InterestRouter = require('./InterestRouter')
const PageRouter = require('./PageRouter')

Router.use('/users', UserRouter)
Router.use('/interests', InterestRouter)
Router.use('/pages', PageRouter)

module.exports = Router