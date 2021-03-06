const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  /* server based databases
  username: '...',
  database: '...',
  password: '...',
  host: 'abcd.server.com',
  port: 3333,
   */
  storage: __dirname + '/test.db',
})

async function task () {
  await db.sync()
  await db.authenticate()
}

task ()
