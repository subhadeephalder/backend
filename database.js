const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('rechargeportal','dbuser','1234',{
    host:'localhost',
    dialect: 'mysql'
});
module.exports=sequelize;