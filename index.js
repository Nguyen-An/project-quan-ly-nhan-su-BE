const express = require('express')
const app = express()
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

dotenv.config();

require('./src/routes/router.module.js')(app);

let port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})