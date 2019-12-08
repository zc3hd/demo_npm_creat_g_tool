var fs = require('fs');
module.exports = function (path) {
	/* body... */
	console.log(fs.readFileSync(path, 'utf-8'))
}