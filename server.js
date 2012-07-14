var gm = require('gm');
var http = require('http');
var fs = require('fs');

var server = http.createServer( function(req, res) {

	gm('/home/jgonzalez/0009_cc0640_001_12U.jpg')
	        .quality(70)
	        .noProfile()
		.stream(function(err, stdout, stderr) {
			if (err) {
				console.log('Error processing image', err)	
			} else {
				var file = fs.createWriteStream("temp.jpg");
				res.writeHead(200, { 'Content-Type':'image/jpg' });
				res.write(file);
				res.end();		
			}
		}
	);
});

server.listen(8080);

/*
gm('/home/jgonzalez/0009_cc0640_001_12U.jpg')
	.quality(70)
	.noProfile()
	.write(dir + '/test.jpg', function (err) {
		if (err) return console.dir(arguments)
		console.log(this.outname + " created :: " + arguments[3])
	}
)
/*


