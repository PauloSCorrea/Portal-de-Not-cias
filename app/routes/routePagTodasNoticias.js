module.exports= app => {
    app.get('/noticias', (req, res) => {

        var connection=app.config.connection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, (error, result) => {
            res.render('PagNoticia/todasNoticias', {noticias:result});
        });
    });
};