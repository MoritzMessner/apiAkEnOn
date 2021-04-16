const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.get("/", (req, res) => {
    res.send('Hello Home!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})