lodash-webpack-plugin-sandbox
---

```javascript
import _ from 'lodash';

_.merge({foo: 1}, {bar: 1});
```

```
ls -lhS lib/*.js
-rw-r--r--  1 sakai.akinobu  staff    71K  8 20 11:40 lib/no-plugins.bundle.js
-rw-r--r--  1 sakai.akinobu  staff    18K  8 20 11:44 lib/with-babel-plugin-lodash.bundle.js
-rw-r--r--  1 sakai.akinobu  staff   9.5K  8 20 11:44 lib/with-babel-plugin-lodash-and-lodash-webpack-plugin.bundle.js
```
