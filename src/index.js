const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }))

require('./app/controllers/authController')(app)
require('./app/controllers/projectController')(app)

app.listen(4000)
