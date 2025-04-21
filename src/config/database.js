const mongoose = require('mongoose');
const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://djbhuwad111:qd1mTa65tRWHVKTh@cluster2910.1quttww.mongodb.net/devTinder"
    );
}

module.exports = connectDB;