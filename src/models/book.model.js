import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.connection.js';

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }, 

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique : true,
    validate : {
      notEmpty : {
        msg : "name cannot be empty"
      },
      len: {
        args: [3, 50],
        msg: 'Name must be between 3 and 50 characters',
      },
    },
  },
  average_score: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
    defaultValue: -1,
  },


})

export default Book

