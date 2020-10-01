const { Position } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const positions = await Position.findAll({
        limit: 50
      })
      res.send(positions);
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar a lista'
      })
    }
  },
  async post(req, res) {
    try {
      const position = await Position.create(req.body)
      res.send(position)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao salvar no banco'
      })
    }
  },
  async put(req, res) {
    try {
      await Position.update(req.body, {
        where: {
          id: req.params.positionId
        }
      })
      const pos = await Position.findOne({
        where: {
          id: req.params.positionId
        }
      })
      res.send(pos)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao salvar no banco'
      })
    }
  },
  async delete(req, res) {
    try {
      console.log('chegou delete', req)
      await Position.destroy({
        where: {
          id: req.params.positionId
        }
      })
      console.log('deletou')
      res.send('')
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao deletar no banco'
      })
    }
  },
  async show(req, res) {
    try {
      const position = await Position.findOne({
        where: {
          id: req.params.positionId
        }
      })
      res.send(position)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar a posição'
      })
    }
  }
}
