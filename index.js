var fs = require('fs')
var express = require('express')
var bodyparser = require('body-parser')
app = express()
router = express.Router()
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use('/', express.static('static'))
app.use('/', router)
router.post('/api/writefile', (req,res)=>{
  console.log(req.body.file)
  fs.writeFileSync('static/ui-config.js', req.body.file, 'utf8')
})
app.listen( 8090, r => console.log('running on port 8090'))


