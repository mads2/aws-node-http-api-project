
const mysql = require('serverless-mysql')({
  backoff: 'decorrelated',
  base: 5,
  cap: 200
})

 mysql.config({
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      port: process.env.port,
      database : process.env.database
  })

module.exports.getTrades = async (event) => {

  const sqlQuery = "SELECT * FROM trade";
  
  let results = await mysql.query(sqlQuery)

  await mysql.end()
  mysql.quit()
  return JSON.stringify(results);
  

};
