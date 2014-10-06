generator-express-rest-api
==========================

### Summary
This is a Yeoman generator to quick scaffold a RESTful API using expresss and cluter-service.  The strucutre generated follows the MVC controller/service/repository pattern.

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
\app
\..\config
\..\settings
\..\route.config.json

\..\controllers
\..\..\v1
\..\..\..\users
\..\..\..\..\userscontroller.js

\..\services
\..\..\users
\..\..\..\userservice.js

\..\repositories
\..\..\users
\..\..\..\userrepository.js
\test
\..\spec
\..\mocha.opts
\..\tests.initialize.js

\..\..\controllers
\..\..\..\v1
\..\..\..\..\users
\..\..\..\..\..\userscontroller.tests.js

\..\..\services
\..\..\..\users
\..\..\..\..\userservice.tests.js

\..\..\repositories
\..\..\..\users
\..\..\..\..\userrepository.js
