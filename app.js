const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { version } = require('./config/settings');

const { catchErrors } = require('./middlewares/errors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/api/v${version}`, routes);

app.use(catchErrors);

module.exports = app;