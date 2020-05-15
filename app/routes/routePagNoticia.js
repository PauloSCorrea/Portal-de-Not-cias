module.exports= app => {
    app.get('/noticia', (req ,res) => {

        var connection=app.config.connection();

        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, (error, result) => {
            res.render('PagNoticia/noticia',{noticia:result});
        });
    });
};