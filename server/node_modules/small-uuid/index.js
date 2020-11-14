var uuid = require('node-uuid');

module.exports = {
	create: create,
	fromBuffer: fromBuffer,
	toBuffer: toBuffer,
	fromHex: fromHex,
	toHex: toHex,
};

function create() {
	var buffer = new Buffer(16);
	uuid.v4(null, buffer, 0);
	return fromBuffer(buffer);
}

function fromBuffer(buffer) {
	return buffer.toString('base64')
		.substring(0, 22) // remove the trailing "=="
		.replace(/\//g, '-'); // make our uuid url friendly by replacing "/" with "-"
}

function toBuffer(value) {
	var fixed = value.replace(/-/g, '/') + '==';
	return new Buffer(fixed, 'base64');
}

function fromHex(value) {
	var buffer = new Buffer(16);
	uuid.parse(value, buffer);
	return fromBuffer(buffer);
}

function toHex(value) {
	var buffer = toBuffer(value);
	return uuid.unparse(buffer);
}
