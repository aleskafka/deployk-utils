

module.exports = Stat;


/**
 * @param {string}
 * @param {Date}
 * @param {int}
 * @param {int}
 * @constructor
 */
function Stat(type, mtime, size, mode)
{
	/** @var {string} */
	this.type = type;

	/** @var {Date} */
	this.mtime = mtime;

	/** @var {int} */
	this.size = size;

	/** @var {int} */
	this.mode = mode;
}


/**
 * @param {fs.Stat}
 * @return {Stat}
 */
Stat.fromFS = function(stat)
{
	return new Stat(
		stat.isDirectory() ? 'directory' : (stat.isSymbolicLink() ? 'symlink' : 'file'),
		stat.mtime,
		stat.size,
		parseInt((stat.mode & parseInt("777", 8)).toString(8), 10)
	);
};


Stat.prototype.isFile = function()
{
	return this.type==='file';
};


Stat.prototype.isDirectory = function()
{
	return this.type==='directory';
};


Stat.prototype.isSymbolicLink = function()
{
	return this.type==='symlink';
};
