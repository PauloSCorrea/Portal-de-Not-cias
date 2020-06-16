var mysql = require("mysql");       // Requerimos o "mysql"

conneMysql = () => {                // Criamos uma função com as configurações do BD
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'lordbatata',
            database: 'portal_noticias'
        });
    };

module.exports = () =>{    //exportamos todo o modulo de conexão
    return conneMysql;    
};