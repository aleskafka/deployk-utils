# deployk-utils

utilities for deployk package

## dirname usage

```javascript
var dirmatch = require("deployk-utils").dirmatch;

dirmatch("test", "/path/to/test") // true!
dirmatch("test", "/path/to/test/file.js") // true!
dirmatch("path/**/test", "/path/to/test") // true!
dirmatch("/test", "/path/to/test") // false!
```
