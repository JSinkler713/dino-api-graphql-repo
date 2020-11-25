const resolvers = {
  //match the Queries
  Query: {
    async allDinos(_,__,context) {
      const allDinos =  await context.dinosaurs.findAll()
      console.log(allDinos)
      return allDinos
    },
    async aDino(_,{input},context) {
      console.log(input)
      const dino = await context.dinosaurs.findOne({
        where: input
      })
      console.log(dino)
      return dino
    },
    async aUser(_,{input},context) {
      console.log(input)
      const user = await context.user.findOne({
        where: input
      })
      console.log(user)
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
    async makeUser(_, {input: {name, dinos}}, context) {
     const createdUser = await context.users.create({ name, type })
      return createdUser
    }
  },
  User: {
    dinos: async(parent, {input}, context)=> {
      console.log(parent.id)
      const foundUser = await context.user.findOne({where: { id: parent.id }, include: [context.dinosaurs]})
      console.log('***********************')
      console.log('***********************')
      return foundUser.dinosaurs
    }
  }
  
  //any type that has a relationsihp to another
  //settings has a user
      //given settings return a user with the given settings
      //if we had a real db here we would do that
      //instead just return what it's expecting, a user
}
module.exports = resolvers

