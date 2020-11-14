# small-uuid
> A short, url friendly, base64 encoded uuid module

This module creates uuid/guid strings that are short then the standard '00000000-0000-0000-0000-000000000000' format.
Short uuids will be 22 characters long (instead of 36) and a basically a base64 encoded string with the trailing "==" removed and any "/" replaced with "-" (in order to make them play nice in a url).


## Installation
Install via `npm`:

```
$ npm install small-uuid
```


## Usage

Create a short uuid
``` js
var uuid = require('small-uuid');
var id = uuid.create();
// "id" will equal something like "NaTPOgp1QUuB6Gm5tAdcSw"
```

Create from a buffer
``` js
var uuid = require('small-uuid');
var buffer = new Buffer('NaTPOgp1QUuB6Gm5tAdcSw==', 'base64');
var id = uuid.fromBuffer(buffer);
// "id" will equal "NaTPOgp1QUuB6Gm5tAdcSw"
```

Create a buffer from a short uuid
``` js
var uuid = require('small-uuid');
var buffer = uuid.toBuffer('NaTPOgp1QUuB6Gm5tAdcSw');
```

Create from a standard uuid hex string
``` js
var uuid = require('small-uuid');
var id = uuid.fromHex('35a4cf3a-0a75-414b-81e8-69b9b4075c4b');
// "id" will equal "NaTPOgp1QUuB6Gm5tAdcSw"
```

Create a standard hex string from a short uuid
``` js
var id = uuid.toHex('NaTPOgp1QUuB6Gm5tAdcSw');
// "id" will equal "35a4cf3a-0a75-414b-81e8-69b9b4075c4b"
```

## Authors

**Eric Herbrandson** ([eric@herbrandson.com](eric@herbrandson.com))



## License
Copyright (c) 2016 Eric Herbrandson

Released under the MIT license