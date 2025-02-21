const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const userRoutes = require('./routes/user');
const workoutRoutes = require('./routes/workout');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(config.port, () => console.log(`Server running on port ${config.port}`)))
    .catch(err => console.log(err));