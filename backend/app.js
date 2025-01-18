
const express = require('express');
const config = require('config');
const cors = require('cors'); 
const app = express();

const routes = require('./routes/index');

const port = config.get('SERVER.PORT') || 3000;

app.use(cors({ 
    origin: config.get('CLIENT.URL') 
})); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/user', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
