const express = require('express');
const router = express.Router();
//Const 
// const jsonData = {
//   message: 'Hello from the server!',
//   data: {
//     key: 'value',
//     number: 123
//   }
// };

//Création de l'instance postModel
const { Posts } = require('../models');

// Définition de la route GET pour le chemin '/' endpoint
router.get('/', async (req, res) => {
  const getAllPost = req.body;
  const allPost = await Posts.findAll(getAllPost)
  res.json(allPost);
  
});

router.post('/', async (req, res) => {
  try {
    const post = req.body;
    const newPost = await Posts.create(post);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la création du post:", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la création du post." });
  }
});


module.exports = router;