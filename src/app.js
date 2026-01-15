// src/app.js
const express = require('express');
const routes = require('./routes');
const cors = require('cors'); 
const { errorHandler, notFound } = require('./middlewares/errorHandler');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Optional: process.exit(1); to exit the application on unhandled rejections
});

const app = express();

app.use(express.json({limit:'5mb'}));
app.use(cors());
app.set('trust proxy', true);

app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true, limit:'5mb' }));

app.use('/', routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
