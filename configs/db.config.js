module.exports = {
    HOST : "127.0.0.1",
    USER : "root",
    PASSWORD : "9666694526..",
    dialect : "mysql",
    DB : "ecom_db",
    pool :{
    max :5,
    min :0,
    acquire: 30000, //max time in ms that a pool will try to get connection before throwing error
    idle :10000 // maximum time in ms that a connection can be idle before being released
    
}
   }

   