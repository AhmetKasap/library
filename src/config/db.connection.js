import { Sequelize } from 'sequelize'
import 'dotenv/config'

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  })

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export { sequelize, connectDB }