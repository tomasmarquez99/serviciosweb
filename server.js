
const express = require('express')
const app = express()
const path = require('path');


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect("/index.html")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

