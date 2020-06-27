import express from 'express'
const router = express.Router()

router.get('/',(req:express.Request,res:express.Response,next: express.NextFunction)=>{
	let _url:string = 'home/index'
	console.log(`${req.url} -> ${_url}`)
	res.render(_url, {title:'Home Page'})
	next();
})

export default router
