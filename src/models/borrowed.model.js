import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.connection';
import Book from './book.model.js';
import User from './user.model.js';


const Borrowed = sequelize.define('Borrowed', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  borrowed_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  returned_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  user_score: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
})

// İlişkiler
Borrowed.belongsTo(User, { foreignKey: 'user_id' })
Borrowed.belongsTo(Book, { foreignKey: 'book_id' })

User.hasMany(Borrowed, { foreignKey: 'user_id' })
Book.hasMany(Borrowed, { foreignKey: 'book_id' })


export default Borrowed