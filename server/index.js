var express = require('express');
var bodyParser = require('body-parser');
var reimbursementsController = require(__dirname + '/controllers/reimbursements_controller');

var app = express();
var baseURL = '/api/reimbursements';

app.use( bodyParser.json() );
app.use( express.static(__dirname + '/public/build' ));

var port = 3000;
app.listen( port, () => {console.log('Server listening on port ' + port); } );

app.get(baseURL, reimbursementsController.read);
app.post(baseURL, reimbursementsController.create);
app.put(baseURL + '/:id', reimbursementsController.update);
app.delete(baseURL + '/:id', reimbursementsController.delete);