Ember App (Kit)
===============

I'm just workin' on a thing here, this is not actually a fork of ember
app kit, just doing some "research" as they say.

Make it happen:

1. clone this repo
2. npm install
3. go remove lines 31-36 from
   `node_modules/grunt-es6-module-transpiler/node_modules/es6-module-transpiler/lib/amd_compiler`
   (for reference, see: [this pull request](https://github.com/square/es6-module-transpiler/pull/54))
4. bower install
5. $ grunt dev
6. visit http://localhost:8000

Including vendor code from bower:
---------------------------------

Try this on for size with `grunt dev` running:

`bower install moment`

Then go add this to a file:

`import moment from 'moment'`

Then wet your pants at the sight of a front-end development workflow
from the future.

