const resolvers = {
  //match the Queries
  Query: {
    async allDinos(_,__,context) {
      const allDinos =  await context.dinosaurs.findAll()
      return allDinos
    },
    async aDino(_,{input},context) {
      //input {"id": "someId"}
      const dino = await context.dinosaurs.findOne({
        where: input
      })
      return dino
    },
    async aUser(_,{input},context) {
      const user = await context.user.findOne({
        where: input
      })
      return user
    }
  },
  //match the mutations
  Mutation: {
    /* TRYING ASYNC */
    async makeDino(_, {input: {name, type}}, context) {
     const createdDino = await context.dinosaurs.create({ name, type })
      return createdDino
    },
    async makeUser(_, {input: {name}}, context) {
     const createdUser = await context.user.create({ name })
      return createdUser
    },
    async makeAssociation(parent, {input: {userId, dinoId}}, context) {
      const foundUser = await context.user.findByPk( userId )
      await foundUser.addDinosaurs(dinoId)
      const updatedUser = await context.user.findOne({ where: {id:userId}, include: ['dinosaurs']})
      return updatedUser
    },
  },
  //match any fields on a type that are not scalars to tell it how to resolve
  User: {
    //dinos is type [Dinosaur] on users, so we tell it how to resolve
    //we make use of the parent for the specific user the dinos field
    //will be on
    dinos: async(parent, {input}, context)=> {
      //the parent is a USER, so we have access to it's fields, like parent.id
      const foundUser = await context.user.findOne({where: { id: parent.id }, include: [context.dinosaurs]})
      return foundUser.dinosaurs
    }
  }
}
module.exports = resolvers

