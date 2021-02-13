class Connect {

    constructor(database, user, password) {        
        const mysql = require('mysql');

        this.database = database;
        this.user = user;
        this.password = password;
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: user,
            password: password,
            database: database
            });
    }

    createConnection() {
        this.connection.connect((err) => {
            if (err) throw alert(err);
            alert('Connected!');
        });
    }

    // showTable() {
    //     this.connection.query("SELECT * FROM valute;", (err, result, fields) => {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // }

    closeConnection() {
        this.connection.end((err) => {
            if (err) throw alert(err);
            alert('Connection closed...');
        });
    }
}

module.exports = {Connect: Connect};
