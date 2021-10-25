# Serverless Framework Node HTTP API on AWS
## This application queries the trade bot database
  

This application exposes two rest endpoints that return the trades made by the trading bot. It's made of: 
* NodeJs 12
* Serverless Framework 2.60.2
* serverless-mysql 1.5.4
* Aws Lambda

To query all trades access: 
  ```
GET:     https://mjy4eq48aa.execute-api.us-east-1.amazonaws.com
```
To query a specific pair:
  ```
GET:     https://mjy4eq48aa.execute-api.us-east-1.amazonaws.com/{pair}
```
ex. https://mjy4eq48aa.execute-api.us-east-1.amazonaws.com/nearbusd

  
  
### Set up
The above environment variables need to be set up on aws:
* host
* user
* password
* port
* database  
