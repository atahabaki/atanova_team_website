import express from 'express'
const router = express.Router()

router.get('/',(req:express.Request,res:express.Response,next: express.NextFunction)=>{
	let _url:string = 'blog/index'
	console.log(`${req.url} -> ${_url}`)
	res.render(_url, {title:'All Posts'})
	next();
})

export default router
