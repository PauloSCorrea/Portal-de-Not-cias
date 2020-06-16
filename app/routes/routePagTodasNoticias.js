module.exports= app => {
    app.get('/noticias', (req, res) => {

        var connection=app.config.connection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias( (error, result) => {
            res.render('PagNoticia/todasNoticias', {noticias:result});
        });
    });
};