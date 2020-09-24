'use strict';
const dinos = [
  {
    name:"Littlefoot",
    type:"apatosaurus",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name:"Cera",
    type:"triceratops",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name:"Ducky",
    type:"saurolophus",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name:"Petrie",
    type:"pteranodon",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name:"Spike",
    type:"stegosaurus",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('dinosaurs', dinos, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('dinosaurs', null, {})
  }
};
