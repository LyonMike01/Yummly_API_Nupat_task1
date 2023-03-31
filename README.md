RapidYummly API Node.js Package

This package provides a simple and easy-to-use interface for accessing the RapidYummly API in Node.js.

Installation

Install the package from npm:

npm install rapidyummly-api-node

Usage
The package exports a class RapidYummlyAPI which represents a connection to the RapidYummly API. 
You will need an API key to use this package, which you can obtain from the RapidYummly API dashboard.

Postman Documentation

https://documenter.getpostman.com/view/21621604/2s93RTSCxg

INITIALIZATION

const RapidYummlyAPI = require('rapidyummly-api-node');
const rapidyummly = new RapidYummlyAPI(apiKey);
