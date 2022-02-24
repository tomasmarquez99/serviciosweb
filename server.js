
const express = require('express');
const app = express()



app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.redirect("/index.html")
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

