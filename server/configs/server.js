const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const api = require('../routers/api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

module.exports = app;
