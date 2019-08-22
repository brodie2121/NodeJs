const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  nailsgarden,
  postgres, 
  Fiddle123,
  {
    host: HOSTNAME,
    dialect: 'mysql',
    logging: false,
    freezeTableName: true,
    operatorsAliases: false
  }
)
