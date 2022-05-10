const { Page } = require('../models')


const CreatePage = async (req, res) => {
  try {
    const page = req.body
    const newPage = await Page.create(page)
    if (newPage) {
      return res.status(201).send(newPage)
    }
    res
      .status(404)
      .send({ msg: 'Page not created. Please verify the info given and try again' })
  } catch (error) {
    throw error
  }
}

const GetAllPages = async (req,res) => {
  try {
    const pages = await Page.findAll()
    if (pages) {
      return res.status(200).send(pages)
    }
    res.status(404).send({ msg: 'No Pages found' })
  } catch (error) {
    throw error
  }
}

const GetPageByPk = async (req, res) => {
  try {
    const pk = req.params.pk
    const page = await Page.findByPk(pk)
    if (page) {
      return res.status(200).send(page)
    }
    res.status(404).send({ msg: 'No Page found' })
  } catch (error) {
    throw error
  }
}

const UpdatePage = async (req, res) => {
  try {
    const pk = req.params.pk
    const update = req.body
    const updatePage = await Page.update(update, {
      where: { id: pk },
      returning: true
    })
    if (updatePage) {
      return res.status(200).send(updatePage)
    }
    res.status(204).send('Cannot update Page at this time.')
  } catch (error) {
    throw error
  }
}

const DeletePage = async (req, res) => {
  try {
    const pk = req.params.pk
    const page = await Page.findByPk(pk)
    await Page.destroy({
      where: { id: pk }
    })
    if (page) {
      return res.status(200).send(`Page: ${page.title} is deleted`)
    }
    res.status(204).send({ msg: 'Did not find any Pages to delete' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreatePage,
  GetAllPages,
  GetPageByPk,
  UpdatePage,
  DeletePage,
}
