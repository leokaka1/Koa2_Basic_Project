const Router = require('koa-router')
const router = new Router({prefix:"/api"})
const captcha = require('trek-captcha')
const fs = require('fs')

router.get('/',async(ctx)=>{
    // console.log('captcha',ctx.session)
    const{token,buffer} = await captcha()
    // ctx.session.captcha = token
    console.log(token)
    ctx.body = buffer
    // fs.createWriteStream('a.gif').on('finish', () => console.log(token)).end(buffer)
})

module.exports = router