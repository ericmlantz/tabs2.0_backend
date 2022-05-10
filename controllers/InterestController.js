const { Interest } = require('../models')


const CreateInterest = async (req, res) => {
  try {
    const interest = req.body
    const newInterest = await Interest.create(interest)
    if (newInterest) {
      return res.status(201).send(newInterest)
    }
    res
      .status(404)
      .send({ msg: 'Interest not created. Please verify the info given and try again' })
  } catch (error) {
    throw error
  }
}

const GetAllInterests = async (req,res) => {
  try {
    const interests = await Interest.findAll()
    if (interests) {
      return res.status(200).send(interests)
    }
    res.status(404).send({ msg: 'No interests found' })
  } catch (error) {
    throw error
  }
}

const GetInterestByPk = async (req, res) => {
  try {
    const pk = req.params.pk
    const interest = await Interest.findByPk(pk)
    if (interest) {
      return res.status(200).send(interest)
    }
    res.status(404).send({ msg: 'No interest found' })
  } catch (error) {
    throw error
  }
}

const UpdateInterest = async (req, res) => {
  try {
    const pk = req.params.pk
    const update = req.body
    const updateInterest = await Interest.update(update, {
      where: { id: pk },
      returning: true
    })
    if (updateInterest) {
      return res.status(200).send(updateInterest)
    }
    res.status(204).send('Cannot update interest at this time.')
  } catch (error) {
    throw error
  }
}

const DeleteInterest = async (req, res) => {
  try {
    const pk = req.params.pk
    const interest = await Interest.findByPk(pk)
    await Interest.destroy({
      where: { id: pk }
    })
    if (interest) {
      return res.status(200).send(`Interest: ${interest.topic} is deleted`)
    }
    res.status(204).send({ msg: 'Did not find any interests to delete' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateInterest,
  GetAllInterests,
  GetInterestByPk,
  UpdateInterest,
  DeleteInterest,
}
