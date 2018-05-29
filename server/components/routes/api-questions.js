/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const questionController = require('../controllers/questionController')

// custom searches
router.get('/science', questionController.searchScienceQuestions);
router.get('/english', questionController.searchEnglishQuestions);
module.exports = router;