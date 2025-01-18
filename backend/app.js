
const express = require('express');
const config = require('config');
const cors = require('cors'); 
const app = express();
const mongoose = require('mongoose');

const loginRouter = require('./routes/Login.route');
const worqhatRouter = require('./routes/Worqhat.route');

const PORT = config.get('SERVER.PORT') || 3000;

app.use(cors({ 
    origin: config.get('CLIENT.URL') 
})); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const MONGO_URI = config.get('MONGO.URI');

function connectToDB() {
  mongoose.connect(MONGO_URI)
      .then(() => {
          console.log("Connected to DB");
      })
      .catch((error) => {
          console.error("Error connecting to DB:", error.message);
      });
}

connectToDB();

app.use('/api', loginRouter);
app.use('/api/models', worqhatRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
