const express=require('express');
const bodyparser=require('body-parser');
const app = express();
const cors=require('cors');
const apiController = require('./controller/apiController');
const port = process.env.PORT||5000;
app.use(bodyparser.json());

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
  }));

apiController(app);

app.listen(port);
