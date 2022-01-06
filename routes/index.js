const express = require('express')
const router = express.Router();
const pagesController = require('../controlers/PagesController')
const AppCOntroller = require('../controlers/AppController')
const PersonController = require('../controlers/PersonController')
const cyce= require('../db')
router.get('/',pagesController.home);

router.post('/addPerson',PersonController.add)
router.get('/printPerson', PersonController.print)

module.exports=router