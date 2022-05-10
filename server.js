const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const UserRouter = require('./routes/UserRouter')
const InterestRouter = require('./routes/InterestRouter')
const PageRouter = require('./routes/PageRouter')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/users', UserRouter)
app.use('/interests', InterestRouter)
app.use('/pages', PageRouter)


app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
