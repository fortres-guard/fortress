const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const waitlistRoutes = require('./routes/waitlistRoutes');
const contactRoutes = require("./routes/contactRoutes")
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Failed to sync database:', error);
});

app.use('/api', waitlistRoutes);
app.use('/api', contactRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
