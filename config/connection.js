var mysql = require("mysql");

conneMysql = () => {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'lordbatata',
            database: 'portal_noticias'
        });
    };

module.exports = () =>{
    return conneMysql;    
};