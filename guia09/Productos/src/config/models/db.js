const mysql = require('mysql2');
const dbConfig = require('../db.config.js');

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT
});

// Verificar conexión
connection.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión a la base de datos:', err.message);
    return;
  }
  console.log('✅ Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
