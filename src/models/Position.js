module.exports = (sequelize, DataTypes) => {
    const Position = sequelize.define('Position', {
      name: DataTypes.STRING,
      latitude: DataTypes.DOUBLE,
      longitude: DataTypes.DOUBLE
    })
  
    return Position
  }
