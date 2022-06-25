'use strict';
const express = require('express');
const cors = require('cors');
const environement = require('./environnement');
const bodyParser = require('body-parser');
const winston = require('winston');
const app = express();

const categorieRouter = require('./routes/categorie-routes');
const matrialRoutes = require('./routes/matrial.routes');

require('./stratup/db')();
require('./stratup/logging')();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.use('/api/categorie', categorieRouter.routes);
app.use('/api/matrial', matrialRoutes.routes);


app.listen(environement.port, () => winston.info('App listening on url ' + environement.url));