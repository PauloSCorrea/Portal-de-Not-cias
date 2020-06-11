module.exports = app => {
    app.get('/admin', (req ,res) => {
        res.render('PagAdmin/add_noticia');
    });

    app.post("/noticias/salvar", (req, res) => {
        var noticia = req.body;

        var connection = app.config.connection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, (error, result) =>{
            res.redirect("/noticias");
        });
    });
};