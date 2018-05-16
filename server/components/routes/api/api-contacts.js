/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

var attachRouterAPI = require('./_api')
module.exports = attachRouterAPI(router, 'contactController');