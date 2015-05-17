

module.exports = dirmatch;
dirmatch.Dirmatch = Dirmatch;


function dirmatch(pattern, dir)
{
	return new Dirmatch(pattern).match(dir);
};


/**
 * @param {string}
 * @constructor
 */
function Dirmatch(pattern)
{
	if (pattern[0]==='/') {
		pattern = '^' + pattern;

	} else if (pattern[0]!=='*') {
		pattern = '/' + pattern;
	}

	if (pattern[pattern.length-1]!=='*') {
		pattern = pattern + '/';
	}

	var positive = '[^/]+';

	pattern = pattern.replace(new RegExp('/+', 'g'), '/');
	pattern = pattern.replace(new RegExp('^\\*/', 'g'), positive + '/');
	pattern = pattern.replace(new RegExp('/\\*$', 'g'), '/' + positive);
	pattern = pattern.replace(new RegExp('/\\*/', 'g'), '/' + positive + '/');
	pattern = pattern.replace(new RegExp('\\*\\*/', 'g'), '(|.+/)');
	pattern = pattern.replace(/\*/g, '[^/]*');

	/** @var {RegExp} */
	this.pattern = new RegExp(pattern);
};


/**
 * @param {string}
 * @return {boolean}
 */
Dirmatch.prototype.match = function(dir)
{
	dir = '/' + dir + '/';
	dir = dir.replace(new RegExp('/+'), '/');

	return this.pattern.exec(dir)!==null;
};
