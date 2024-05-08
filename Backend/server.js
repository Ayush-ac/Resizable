const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const userRouter = require('./Routes/route')
const dbCon = require("./Utils/db");
require ('dotenv').config();
const bodyparser = require('body-parser');
app.use(cors());


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

dbCon();

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
})
app.use(userRouter);
