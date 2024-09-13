require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')

// set th port from environmental variable or default to 3000

const port = process.env.PORT



// Start server on port 5000
app.listen(port)