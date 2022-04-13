const express = require('express')
const {json} = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(json({limit:'50mb'}))

app.get('/client-close', (req, res) => {
  console.log('/client-close',req.body)
  res.send('""');
  res.status(201).end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})