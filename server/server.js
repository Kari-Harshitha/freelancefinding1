const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projects');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sbworks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

