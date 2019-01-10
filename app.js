const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const morgan = require('morgan');

const { version } = require('./config/settings');
const { catchErrors } = require('./middlewares/errors');

const app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('apidoc'))
app.use(`/api/v${version}`, routes);

app.use(catchErrors);

module.exports = app;