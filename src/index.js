var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

var pages = [
    {name: 'Index', link: '/', file: 'index.ejs'},
    {name: 'Portfolio', link: 'portfolio', file: 'portfolio.ejs'},
    {name: 'Qualifications', link: 'qualifications', file: 'qualifications.ejs'},
]

pages.forEach( (page) => {
    app.get('/' +page.link, (req, res) => {
        res.render(__dirname + '/pages/' + page.file, {
            currentPage: page.link,
            pages: pages
        });
    })
})

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});