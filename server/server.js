const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection established'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes will go here
const contactRouter = require('./route/contact.route'); // Moved here
app.use('/contacts', contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});