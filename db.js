const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const MONGODB_URI = 'mongodb+srv://onetap:onetap2483@onetapcluster.nd9yxk0.mongodb.net/test';
        const conn = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;
