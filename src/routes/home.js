const express = require('express')
const router = express.Router()

router.get("/", (req,res,next)=>{
	res.render('home/index', {title:'Home Page'})
})

module.exports = router
