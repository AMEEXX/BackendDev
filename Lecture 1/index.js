require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res) => {
    res.send('<h1>please login to my heart Arpita</h1>')
})
app.get('/twitter',(req,res) => {
    res.send('Hey I am twitter how are you X')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})