module.exports= function(app){
    app.get('/admin', function (req ,res){
        res.render('PagAdmin/add_noticia');
    });
};