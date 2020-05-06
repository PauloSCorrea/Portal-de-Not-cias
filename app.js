var app = require('./config/server');

var routeNoticias = require('./app/routes/routePagAdmin')(app);
var routeHome = require('./app/routes/routePagHome')(app);
var routeAdmin = require('./app/routes/routePagNoticia')(app);

app.listen(3000, (req, res) => console.log('Server ON!'));