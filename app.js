const express = require('express')
const app = express()
const path = require('path')

// Using/Including the static resources of the public folder
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app