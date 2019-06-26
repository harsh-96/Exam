var express = require('express');
var app = express();

var detailsController=function (req, res) {
  console.log("CAlling rest api");
  var details=[
				{CompanyName:'HCL',CompanyId:12,Project:'BackEnd'},
				{CompanyName:'TATA',CompanyId:15,Project:'CoreJava'},
				{CompanyName:'ZS',CompanyId:20,Project:'MYSQL'},
            ];
  res.send(details);
};

app.get('/details',detailsController );

var server = app.listen(8088);










