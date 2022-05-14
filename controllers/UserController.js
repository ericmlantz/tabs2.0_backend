const { User } = require('../models')
const middleware = require('../middleware')


const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const newUser = await User.create({
      name,
      email,
      passwordDigest
    })
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

const GetAllUsers = async (req,res) => {
  try {
    const users = await User.findAll()
    if (users) {
      return res.status(200).send(users)
    }
    res.status(404).send({ msg: 'No users found' })
  } catch (error) {
    throw error
  }
}

const GetUserByPk = async (req, res) => {
  try {
    const pk = req.params.pk
    const user = await User.findByPk(pk)
    if (user) {
      return res.status(200).send(user)
    }
    res.status(404).send({ msg: 'No user found' })
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const pk = req.params.pk
    const update = req.body
    const updateUser = await User.update(update, {
      where: { id: pk },
      returning: true
    })
    if (updateUser) {
      return res.status(200).send(updateUser)
    }
    res.status(204).send('Cannot update user at this time.')
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    const pk = req.params.pk
    const user = await User.findByPk(pk)
    await User.destroy({
      where: { id: pk }
    })
    if (user) {
      return res.status(200).send(`User: ${user.name} is deleted`)
    }
    res.status(204).send({ msg: 'Did not find any Users to delete' })
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        name: user.name
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  RegisterUser,
  GetAllUsers,
  GetUserByPk,
  UpdateUser,
  DeleteUser,
  CheckSession,
}
