const express = require('express')
const app = express() 
app.use(express.json())

app.get('/data', (req, res) => {
    return res.status(200).send({username: 'jonathan123', email: 'jonathan@gmail.com', password: '098password'})
})

module.exports = {app}