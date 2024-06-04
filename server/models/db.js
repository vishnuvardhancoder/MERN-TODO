const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://vishnuvardhan:vishnu07@cluster0.dp3dpcx.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongoUrl).then(() => {
    console.log("MongoDB connection succeeded");
}).catch(err => {
    console.log(`Error in DB connection: ${err}`);
});

module.exports = mongoose;
