module.exports= app => {
    app.get('/noticia', (req ,res) => {

        var connection = app.config.connection();

        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia( (error, result) => {
            res.render('PagNoticia/noticia', {noticia:result});
        });
    });
};