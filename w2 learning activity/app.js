const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


// ✅ Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));


app.listen(3000, () => console.log('🚀 Server running on port 3000'));
