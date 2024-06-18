module.exports = {
  db: {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'zarin_users'
  },
  server: {
    port: process.env.PORT || 443 // Use the environment variable PORT if available, otherwise default to 443
  }
};
