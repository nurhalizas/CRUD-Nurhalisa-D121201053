const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudexpress'
});

connection.connect((err) => {
    if(!!err){
        console.log(err);
    }
    else{
        console.log('connection Berhasil');
    }
})
module.exports = connection;