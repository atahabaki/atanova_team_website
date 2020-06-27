// IMPORTS
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
//const fs = require('fs')

// DOTENV
dotenv.config()

// ROUTES
import homeRouter from './routes/home'
import blogRouter from './routes/blog'
import rootRouter from './routes/root'

// CONSTANTS
const IP = "127.0.0.2"
const PORT = 80

mongoose.connect(
	process.env.DB_URL ?? '',
	{ useNewUrlParser: true,
		useUnifiedTopology: true
	},
	err => {
		if (err) {
			console.log(err)
			return
		}
		console.log("Connected 2 DB!...")
})

// CONFS
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// FOR REQs
app.use('/', homeRouter)
app.use('/blog',blogRouter)
app.use('/root',rootRouter)
app.use(express.static(path.join(__dirname,'www')))

app.listen(PORT, IP, () => {
	console.log(`Running on ${IP}:${PORT}`)
})
