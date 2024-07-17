const { Sequelize } = require("sequelize");


const sequelize = new Sequelize( 'dbTask', 'hani', '123456', {
    host :'localhost',
    dialect : 'postgres',
});

module.exports = sequelize;