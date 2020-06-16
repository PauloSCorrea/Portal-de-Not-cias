module.exports = app => {
    app.get('/admin', (req ,res) => {
        res.render('PagAdmin/add_noticia');
    });

    app.post("/noticias/salvar", (req, res) => {
        var noticia = req.body;

        var connection = app.config.connection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, (error, result) =>{
            res.redirect("/noticias");
        });
    });
};