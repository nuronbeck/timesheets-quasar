const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const port = process.env.PORT || 5000;

const app = express();

app.use(history());
app.use(serveStatic(`${__dirname}/dist/spa`));
app.listen(port);
