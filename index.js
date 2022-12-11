const {app} = require('./app')
const PORT = process.env.PORT || 5000 

app.get('/data', (req, res) => {
    return res.status(200).send({username: 'jonathan123', email: 'jonathan@gmail.com', password: '098password'})
})
app.listen(PORT, () => console.log('server is running on port %s', PORT))