const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const api = require('../routers/api');
const { rootPrefix } = global;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(rootPrefix, '../admin/build/static')));
app.use('/api', api);

const htmlFile = path.join(rootPrefix, '../admin/build/index.html');
const serviceWorkerFile = path.join(rootPrefix, '../admin/build/service-worker.js');
app.get('/service-worker.js', (req, res) => {
	res.sendFile(serviceWorkerFile);
})
app.get('/*', (req, res) => {
	res.sendFile(htmlFile);
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`[SERVER] Server is listening on port ${port}`);
});

module.exports = app;
