const express = require('express');
const app = express();
const port = 3001;

const db = require('./models');

//Exemple De Route
app.get('/users/:userId',(req,res)=>{
  res.send(`lid user est : ${req.params.userId}`);
})

//Router importer 

db.sequelize.sync().then(()=>{
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
})



