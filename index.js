'use strict';
const port = process.env.PORT;
const express=require('express');
const cors =require('cors');
const environement=require('./environnement');
const bodyParser=require('body-parser');
const winston=require('winston');
const error =require('./middelware/eroor');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app=express();
 
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "API Decomentation",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options); 

 

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

const userRouter=require('./routes/user-routes');
const authRoutes=require('./routes/auth-routes');
const demandeRoutes=require('./routes/demande-routes');
 
require('./stratup/config')();
require('./stratup/db')();
require('./stratup/logging')();
require('./stratup/validation')();
 
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.use(error)
app.use('/api',userRouter.routes);
app.use('/api/demande',demandeRoutes.routes);
app.use('/api/auth',authRoutes.routes);
 

app.listen(environement.port, () => winston.info('App listening on url:http://localhost:'+environement.port));