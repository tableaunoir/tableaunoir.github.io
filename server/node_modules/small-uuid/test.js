var assert = require('assert').equal;
var uuid = require('./index');

describe('short-uuid', function() {
	it('can create a short guid', function() {
		var id = uuid.create();
		assert(22, id.length);
	});

	it('can create a short guid from a buffer', function() {
		var buffer = new Buffer('NaTPOgp1QUuB6Gm5tAdcSw==', 'base64');
		var id = uuid.fromBuffer(buffer);
		assert('NaTPOgp1QUuB6Gm5tAdcSw', id);
	});

	it('can create a buffer from a short guid', function() {
		var buffer = uuid.toBuffer('NaTPOgp1QUuB6Gm5tAdcSw');
		var id = buffer.toString('base64');
		assert('NaTPOgp1QUuB6Gm5tAdcSw==', id);
	});

	it('can create a short guid from a hex string', function() {
		var id = uuid.fromHex('35a4cf3a-0a75-414b-81e8-69b9b4075c4b');
		assert('NaTPOgp1QUuB6Gm5tAdcSw', id);
	});

	it('can create a hex string from a short guid', function() {
		var hex = uuid.toHex('NaTPOgp1QUuB6Gm5tAdcSw');
		assert('35a4cf3a-0a75-414b-81e8-69b9b4075c4b', hex);
	});
});
