module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'supremeadm',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage:  './db.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
