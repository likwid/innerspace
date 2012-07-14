var gm = require('gm');
var dir = __dirname 

gm('/home/jgonzalez/0009_cc0640_001_12U.jpg')
	.quality(70)
	.noProfile()
	.write(dir + '/test.jpg', function (err) {
		if (err) return console.dir(arguments)
		console.log(this.outname + " created :: " + arguments[3])
	}
)


