'use strict';

require("dotenv").config();//this load the .env file
var mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_USER,
    database: process.env.DB_USER,
    connectionLimit: 5
});

exports.execute_query = function (query, params) {
    return pool.getConnection()
        .then(conn => {
            return conn.query(query, params)
                .then(response => {
                    conn.release();
                    //console.log("response: ",response);
                    return response;
                })
                .catch(err => {
                    conn.release();
                    console.error("error in query: ", err);
                    return { "status": "error in data base" };
                })
        })
        .catch(err => {
            console.error("error in connection: ", err);
        });
}
