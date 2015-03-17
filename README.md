generator-express-rest-api
==========================

### Summary
This is a Yeoman generator to quick scaffold a RESTful API using expresss, cluter-service, mocha, chai, and sinon.  The structure generated follows the MVC controller/service/repository pattern.

### Installing Yeoman
http://yeoman.io/learning/index.html

### Installing Generator
`> npm install -g generator-express-rest-api`

### Scaffolding Application
`> yo express-rest-api`

### Scaffolding Controller, Controller Test, and Updates Route Config
`> yo express-rest-api:controller`

### Scaffolding Service and Service Test
`> yo express-rest-api:service`

### Scaffolding Repository and Repository Test
`> yo express-rest-api:repository`

### Application Folder Structure Example
```
package.json
server.js
\app
\..\config
\..\settings
\..\..\settings-config.js
\..\route.config.json
\..\route-config.js
\..\worker-config.js

\..\controllers
\..\..\v1
\..\..\..\users
\..\..\..\..\users-controller.js

\..\services
\..\..\users
\..\..\..\user-service.js

\..\repositories
\..\..\users
\..\..\..\user-repository.js
\test
\..\spec
\..\mocha.opts
\..\tests.initialize.js

\..\..\controllers
\..\..\..\v1
\..\..\..\..\users
\..\..\..\..\..\users-controller.tests.js

\..\..\services
\..\..\..\users
\..\..\..\..\user-service.tests.js

\..\..\repositories
\..\..\..\users
\..\..\..\..\user-repository.tests.js
