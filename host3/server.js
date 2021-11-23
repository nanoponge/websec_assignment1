const express = require('express')
const { createReadStream } = require('fs')
const bodyParser = require('body-parser')
const app = express()
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
 createReadStream('index.html').pipe(res)
})

app.get('/api/jsonpdate', (req, res) => {
 res.jsonp({ date: Date.now() })
})


app.listen(80)
