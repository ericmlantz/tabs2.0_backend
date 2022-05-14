const { Search } = require('../models')


const CreateSearch = async (req, res) => {
  try {
    const search = req.body
    const newSearch = await Search.create(search)
    if (newSearch) {
      return res.status(201).send(newSearch)
    }
    res
      .status(404)
      .send({ msg: 'Search not created. Please verify the info given and try again' })
  } catch (error) {
    throw error
  }
}

const GetAllSearch = async (req,res) => {
  try {
    const searches = await Search.findAll()
    if (searches) {
      return res.status(200).send(searches)
    }
    res.status(404).send({ msg: 'No searches found' })
  } catch (error) {
    throw error
  }
}

const GetSearchByPk = async (req, res) => {
  try {
    const pk = req.params.pk
    const search = await Search.findByPk(pk)
    if (search) {
      return res.status(200).send(search)
    }
    res.status(404).send({ msg: 'No search found' })
  } catch (error) {
    throw error
  }
}

const UpdateSearch = async (req, res) => {
  try {
    const pk = req.params.pk
    const update = req.body
    const updateSearch = await Search.update(update, {
      where: { id: pk },
      returning: true
    })
    if (updateSearch) {
      return res.status(200).send(updateSearch)
    }
    res.status(204).send('Cannot update search at this time.')
  } catch (error) {
    throw error
  }
}

const DeleteSearch = async (req, res) => {
  try {
    const pk = req.params.pk
    const search = await Search.findByPk(pk)
    await Search.destroy({
      where: { id: pk }
    })
    if (search) {
      return res.status(200).send(`Search: ${search.searchName} is deleted`)
    }
    res.status(204).send({ msg: 'Did not find any searches to delete' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateSearch,
  GetAllSearch,
  GetSearchByPk,
  UpdateSearch,
  DeleteSearch,
}
