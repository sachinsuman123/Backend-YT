const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://sachin:wlXtWB7ySsQkiol6@cluster0.exhk7j8.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

module.exports = connectDB;