const mongoose = require('mongoose');
const dns = require('dns');

// Use Google public DNS to resolve MongoDB Atlas SRV records
// (local DNS may not support SRV record lookups)
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/monzato', {
      // Mongoose 6+ defaults are fine
    });
    console.log(`[MongoDB Connected]: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`[MongoDB Connection Error]: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
