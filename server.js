const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.use('/app', AppRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
