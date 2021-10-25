
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

module.exports.getTradesFromPair = async (event) => {

  const sqlQuery = 'select trade.* from trade join candle on candle.id = trade.related_candle_id where candle.symbol like ?';
  const pair = event.pathParameters.pair;

  let results = await mysql.query(sqlQuery, pair)

  await mysql.end()
  mysql.quit()
  return JSON.stringify(results);
  

};
