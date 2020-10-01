const PositionController = require('./controllers/PositionController')

module.exports = (app) => {
  app.get('/position', PositionController.index)
  app.post('/position', PositionController.post) 
  app.put('/position/:positionId', PositionController.put)
  app.delete('/position/:positionId', PositionController.delete)
}
