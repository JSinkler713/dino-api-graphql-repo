const express = require('express')
const router = express.Router();
const urlEncodedParser = express.urlencoded({ extended: false })
//import db for access
const db = require('../models');


router.get('/', async(req, res)=> {
  const dinos = await db.dinosaurs.findAll()
  await res.render('index', {
    dinosaurs: dinos,
    test: 'test',
    title: 'All Dinosaurs',
    numberOfDinos: dinos.length
  });
})

router.get('/new', (req, res)=> {
  res.render('new')
})

router.get('/:id', async(req, res)=> {
  const dino = await db.dinosaurs.findAll({
    where: {
      id: `${req.params.id}`
    }
  })
  await res.render('show', {
    dinosaur: dino[0],
    test: 'test',
    title: 'Dinosaur Show Page',
  });
})

router.delete('/:id', async(req, res)=> {
  await console.log('in the delete req')
  const deletedDino = await db.dinosaurs.destroy({
    where: {
      id: req.params.id
    }
  })
  await res.redirect('/dinosaurs')
})

router.post('/create', urlEncodedParser, async(req, res)=> {
  const dinoCreated = await db.dinosaurs.create({
    name: req.body.name,
    type: req.body.type
  })
  //back to main dino page
  await res.redirect('/dinosaurs')
})

module.exports = router;
