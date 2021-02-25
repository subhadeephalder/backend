const {Sequelize, INTEGER, STRING, BIGINT, UUID}=require('sequelize');
const sequelize= require('../database');
const users=sequelize.define('users',{
   id:{
       type: UUID,
       defaultValue: Sequelize.UUIDV4,
       allowNull:false,
       primaryKey:true
   },
   name:{
       type: STRING,
       allowNull:false
   },
   address:{
    type: STRING,
    allowNull:false
   },
   password:{
    type: STRING,
    allowNull:false
   },
   email:{
    type: STRING,
    allowNull:false
   },
   contact:{
       type: BIGINT,
       allowNull:false
   },
   posts:{
     type: Array,
     allowNull:true
   }
});
module.exports=users;