var Express = require('express');
var app = Express();
app.get('/',function(req,res){
	res.send('Hola mundo (from Docker!)');
});
app.listen(8080);