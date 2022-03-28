const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const technologiesRouter = require('./routes/technologies');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use('/technologies', technologiesRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Successfully connected to MongoDB');
            app.listen(PORT, () => {
                console.log(`Server is listening on port ${PORT}`);
            });
        })
        .catch(error => {
            console.log(error);
        })