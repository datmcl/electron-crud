const form = document.getElementById('auth');

const submit = document.getElementById('submit');
const logout = document.getElementById('logout');

const database = document.getElementById('database');
const login = document.getElementById('login');
const password = document.getElementById('password');

function submitForm(event) {
    var db = database.value;
    var log = login.value;
    var pass = password.value;

    if ((db && log && pass) === '') {
        alert('Please fill the form...');
        return false;
    }

    connection = new Connect(db, log, pass);
    connection.createConnection();
    // connection.showTable();

    database.value = login.value = password.value = '';

    if (logout.disabled === true) {
        logout.disabled = false;
        submit.disabled = true;
    }

    event.preventDefault();
}

function logoutForm(event) {
    
    connection.closeConnection();

    if (logout.disabled === false) {
        logout.disabled = true;
        submit.disabled = false;
    }

    event.preventDefault();
}

var Connect = require('./connect.js').Connect;
var connection;

form.addEventListener('submit', submitForm);
logout.addEventListener('click', logoutForm);
