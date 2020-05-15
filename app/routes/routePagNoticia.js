module.exports= app => {
    app.get('/noticia', (req ,res) => {

        var connection=app.config.connection();

        connection.query('select * from noticias where id_noticias = 2', (error, result) => {
            res.render('PagNoticia/noticia',{noticia:result});
        });
    });
};