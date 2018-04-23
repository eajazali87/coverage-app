var coverage = require('istanbul-middleware');
var express = require('express')
var app = express()

app.use('/coverage',coverage.createHandler());
app.listen(3000, () => console.log('Coverage app listening on port 3000!'));
