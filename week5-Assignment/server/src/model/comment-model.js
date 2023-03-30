import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";
const Comment = sequelize.define(
  "comment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    isEdited: {
      type: DataTypes.BOOLEAN,
    },
    postId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "comment",
  }
);
export default Comment;
