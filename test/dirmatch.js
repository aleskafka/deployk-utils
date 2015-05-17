
var dirmatch = require('../lib/dirmatch');


exports.matchOk = function(test) {

	test.ok(dirmatch('test', '/test'));
	test.ok(dirmatch('test', '/test/file.js'));
	test.ok(dirmatch('test', '/path/to/test'));
	test.ok(dirmatch('test*', '/path/to/test'));
	test.ok(dirmatch('test*', '/path/to/testable'));

	test.ok(dirmatch('/test', '/test'));
	test.ok(dirmatch('**/test', '/path/to/test'));
	test.ok(dirmatch('path/**/test', '/path/to/test'));

	test.done();
}


exports.matchNot = function(test) {

	test.equal(false, dirmatch('dir', '/test'));
	test.equal(false, dirmatch('**/dir', '/test'));
	test.equal(false, dirmatch('/test', '/path/to/test'));

	test.done();
}
