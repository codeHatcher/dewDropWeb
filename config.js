var npmInfo = require('./package.json');

module.exports = function(){
  console.log("Node Env Variable: " + process.env.NODE_ENV);

  // istanbul ignore next: don't look at the env variables
  switch(process.env.NODE_ENV){
    case null:
    case undefined:
    case "local":
      return {
        env: 'local', //should be env/prod
        dbURI : "mongodb://localhost/" + npmInfo.name,
        apiURI : "http://localhost",
        expressPort: 3000,
        loggerLevel: 'info',
        appName: 'trustorTroll'
      };
    case "dev":
    case "development":
      return {
        env: 'dev', //should be env/prod
        dbURI : process.env.MONGODB_URI,
        expressPort: process.env.PORT,
        loggerLevel: 'info',
        appName: 'trustorTroll'
      };
    case "test":
    case "testing":
      return {
        env: 'test', //should be env/prod, can be changed to prod when we are comfy with prod environ
        dbURI : process.env.MONGODB_URI,
        expressPort: process.env.PORT,
        loggerLevel: 'debug',
        appName: 'trustorTroll'
      };
    case "prod":
    case "production":
      return {
        env: 'prod', //should be env/prod, can be changed to prod when we are comfy with prod environ
        dbURI : process.env.MONGODB_URI,
        expressPort: process.env.PORT,
        loggerLevel: 'debug',
        appName: 'trustorTroll'
      };
    default:
      throw new Error("Environment Not Recognized");

  }
}();

