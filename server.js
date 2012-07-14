var gm = require('gm');
var http = require('http');
var url = require('url');

http.createServer( function(req, res) {
	var path = url.parse(req.url).pathname;
	var fileName = path.replace('/img/','');

	gm(__dirname + '/img/' + fileName)
	.quality(70)
	.noProfile()
	.stream(function(err, stdout, stderr) {
		if (err) {
			console.error('Error', err);
		} else {
			
			res.writeHead(200, { 'Content-Type': 'image/jpg' });

			stdout.on('data', function(chunk) {
				res.write(chunk);
			});

			stdout.on('end', function() {
				res.end()
			});
		}
	}); //stream
	
}).listen(8080);
