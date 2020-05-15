module.exports= app => {
    app.get('/admin', (req ,res) => {
        res.render('PagAdmin/add_noticia');
    });
};