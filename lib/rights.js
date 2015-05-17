

module.exports.toInt = toInt;
module.exports.equals = equals;


/**
 * @param {mixed}
 * @param {mixed}
 * @return {boolean}
 */
function equals(rights1, rights2)
{
	return toInt(rights1)===toInt(rights2);
};



/**
 * @param {mixed}
 * @return {int}
 */
function toInt(rights)
{
	if (typeof rights === 'object') {
		if (rights.rights !== undefined) {
			return toInt(rights.rights);

		} else if (rights.mode !== undefined) {
			return toInt(rights.mode);

		} else {
			var _right = '';
			['user', 'group', 'other'].forEach(function(m) {
				_rights += (rights[m] + '---').substr(0, 3);
			});

			return toInt(_rights);
		}


	} else if (typeof rights === 'number') {
		return rights;

	} else if (typeof rights === 'string') {
		if (parseInt(rights, 10)) {
			return parseInt(rights, 10);
		}

		rights = rights.substr(-9);

		if (rights.length === 9) {
			var ret = 0;
			for (var i=0; i<3; i++) {
				var _rights = rights.substr(i*3, 3);

				['r', 'w', 'x'].forEach(function(mode, index) {
					if (_rights.indexOf(mode) !== -1) {
						ret += Math.pow(2, 2-index)*Math.pow(10, 2-i);
					}
				});
			}

			return ret;
		}
	}

	return 0;
}
