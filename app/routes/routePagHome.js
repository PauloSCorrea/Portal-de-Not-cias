module.exports= app => {
    app.get('/', (req ,res) => {
        res.render('PagHome/index');
    });
};