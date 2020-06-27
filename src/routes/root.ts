import express from 'express'
const router = express.Router()

router.get('/',(req:express.Request,res:express.Response,next:express.NextFunction) => {
	let _url:string = 'root/index'
	console.log(`${req.url} -> ${_url}`)
	res.render(_url, {title:'Root User Sys'})
	next()
})

router.post('/login', (req:express.Request,res:express.Response,next:express.NextFunction)=>{
	res.send(req.body.uname)
})

export default router
