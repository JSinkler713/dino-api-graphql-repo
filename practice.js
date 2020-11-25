const db = require('./models');

const makeUser = async () => {
  const createdUser = await db.user.create({
    name: 'Piper'
  })
  console.log(createdUser)
}

//makeUser()


const UserDino = async (userId, dinoId)=> {
  const FoundUser = await db.user.findByPk( userId )
  const FoundDino = await db.dinosaurs.findByPk(dinoId)
  console.log(FoundUser)
  console.log('***********************')
  console.log(FoundDino)
  console.log('***********************')
  await FoundUser.addDinosaurs(FoundDino);

}

//UserDino(1, 3)

const FindUserWith = async(userId)=> {
  const FoundUser = await db.user.findOne({where: { id: userId }, include: [db.dinosaurs]})
  console.log('***********************')
  console.log(FoundUser)
  console.log('***********************')
  console.log(FoundUser.dinosaurs)

}

FindUserWith(1)

