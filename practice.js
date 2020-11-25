const db = require('./models');

const makeUser = async () => {
  const createdUser = await db.user.create({
    name: 'Piper'
  })
  console.log(createdUser)
}

//makeUser()


const UserDino = async (userId, dinoId)=> {
  try{
  const FoundUser = await db.user.findByPk( userId )
  await FoundUser.addDinosaurs(dinoId);
  const updatedUser = await db.user.findOne({where: { id:  userId }, include: [db.dinosaurs]})
  return updatedUser
  } catch (err) {
    console.log('error', err)
    return err
  }
}

UserDino(2, 3)

const FindUserWith = async(userId)=> {
  const FoundUser = await db.user.findOne({where: { id: userId }, include: [db.dinosaurs]})
  console.log(FoundUser.dinosaurs)
}

//FindUserWith(2)

