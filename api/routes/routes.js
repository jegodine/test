'use strict';

module.exports = function (app) {
    var numbers = require('../controllers/multiple');
    
    app.route('/numbers')
    .get(numbers.process);
};
