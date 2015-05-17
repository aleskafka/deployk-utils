

var rights = require('../lib/rights');


exports.stringToInt = function(test) {
	test.equal(rights.toInt('--xrwx-wx'), 173);
	test.equal(rights.toInt('-rwxr-xrw-'), 756);
	test.done();
}


exports.stringOctalToInt = function(test) {
	test.equal(rights.toInt('0744'), 744);
	test.done();
}

exports.intToInt = function(test) {
	test.equal(rights.toInt(777), 777);
	test.done();
}

exports.objectToInt = function(test) {
	test.equal(rights.toInt({user: 'rwx', group:'r', other:'x'}), 741);
	test.done();
}


exports.equals = function(test) {
	test.equal(true, rights.equals('rwxr--r--', 744));
	test.done();
}
