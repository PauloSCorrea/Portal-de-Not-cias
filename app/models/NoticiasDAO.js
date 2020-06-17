function NoticiasDAO (connection) {         //cria uma obs
    this._connection = connection;      //passa as informações para dentro da var connection que faz parte do obs
};

    NoticiasDAO.prototype.getNoticias = function(callback) {      //cria um metodo
        this._connection.query("select * from noticias",callback);      //fala que o metodo ira busca todoas as informaçoes da tabela informação no BD
    };
    NoticiasDAO.prototype.getNoticia = function(callback) { //cria um metodo
        this._connection.query("select * from noticias where id_noticias = 2",callback); //fala que o metodo ira busca uma informação na tabela do BD
    };
    NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) { //cria um metodo
        this._connection.query("insert into noticias set ?", noticia, callback);//pasa informação para o metodo manda para ser salvo no BD
    };

module.exports = () => {
    return NoticiasDAO;
};