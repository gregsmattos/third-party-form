var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var form_submission = require('./form_submission');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.engine('html', ejs.renderFile);

app.get('/', function(req, res)
{
	res.sendFile( __dirname + "/" + "form.html");
})

app.post('/form_submission', urlencodedParser, async function(req, res)
{
    var lab_url = await form_submission.process_form_submission(req,res);
    res.render(__dirname + "/lab.html", {lab_url:lab_url});
})

var server = app.listen(8080,function()
{
	var host = server.address().address
	var port =  server.address().port
	console.log("app listening http://%s:%s", host ,port);
})
