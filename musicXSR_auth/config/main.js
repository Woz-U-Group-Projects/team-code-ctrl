module.exports = {
  // Secret key for JWT signing and encryption
  secret: "super secret passphrase",
  // Database connection information
  database: "mongodb://user:password@ds231070.mlab.com:31070/forge-finder-1",
  // Setting port for server
  port: process.env.PORT || 3000
};
