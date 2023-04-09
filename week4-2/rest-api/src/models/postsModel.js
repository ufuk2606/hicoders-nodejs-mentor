import { Sequelize, DataTypes } from "sequelize";


const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12",{
    host:"localhost",
    dialect:"mysql",
})

const Posts = sequelize.define("Posts",
{
id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
},
title: {
    type: DataTypes.STRING,
    
  },
  content: {
    type: DataTypes.STRING,
    
  },
},
{
    tableName:"posts"
}
)

export default Posts;