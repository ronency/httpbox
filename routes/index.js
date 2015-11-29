

module.exports = function(app){
  app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });

  app.get('/status/:status', function(req, res){
    var status = new Number(req.params.status);
    res.status( status).render('custom-error', {status: status});
  });

};
