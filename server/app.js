const express = require('express');
const app = express();
const port = 3001;

const db = require('./models');
const postRouter = require('./routes/Posts');
//Mettre en place le middleware pour que quand la request est faite
//With Postman , les database peut etre send sous se format
app.use(express.json());
app.use("/posts",postRouter);

db.sequelize.sync().then(()=>{
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
})



