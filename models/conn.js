  const pgp = require("pg-promise")({
    query: e => {
      console.log("QUERY:", e.query);
    }
  });
  
  const options = {
    host: "drona.db.elephantsql.com",
    database: "locairgl",
    user: "locairgl",
    password: "I0SLRWs2fbvfpnBTMDdxu6NUAO8miqNX"
  };
  
  const db = pgp(options);
  
  module.exports = db;