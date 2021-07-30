'use strict'

var database = require('../models/database');

exports.process = (req, res) => {
    const number = req.query.n;

    /*if(!isNumeric(number)){
        res.status(500).json({status:"number is invalid"});
        return;
    }*/
    let result = [];
    for(let i = 1; i <= number; i ++){
        result.push(multiple_process(i))
    }
    database.execute_query("INSERT INTO georgedb.logs (description, create_date) VALUES( ?, ?);", ["number executed: " + number, new Date()]);
    res.json(result);
}

var multiple_process = (number) => {
    let result = "";
    if ((number% 3) === 0 && number != 0){
        result = "Big";
    }
    if ((number% 5) === 0 && number != 0){
        result += "Bang";
    }
    if ((number% 7) === 0 && number != 0){
        result += "Theory";
    }
    if(result===""){
        result = number;
    }
    return result;
}

function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && 
           !isNaN(parseFloat(str))
  }