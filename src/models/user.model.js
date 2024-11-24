import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.connection.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
})

export default User

