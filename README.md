## Welcome to my node-express.js template 😌
if you are looking for a quick and ready to use typescript nodejs with express template,
    
    look no further 😌

  * * *
  
### Description / Content
This template repo has been setup with <code>TypeScript</code>, <code>SASS</code>, <code>EJS</code> <code>MongoDb</code>, and <code>Mongoose</code>

  - It has the following dependencies added to it.
    - CORS
    - nodemon
    - npm-run-all
    - dotenv

### Quick start
  -  run  <code>npm install</code> to install all neccesarry dependencies.

  - open package.json or run <code>npm run</code> to see all available scripts.

  - run <code>npm run dev:concurrently</code> to start both sass:compiler and nodemone.

  * * *

### Files to edit
  - <code>server.ts</code>
    - open <code>src/server.ts</code>. it is the main entry point to the application.

  - <code>express.app.ts</code> 
    - open <code>src/services/express/express.app.ts</code> It here that the main middle-wares like <code>CORS</code> and <code>express.json()</code>. Even <code>ejs</code> has been setup as the templating enjine and the views directory set to views...

  - <code>express.entrypoints.ts</code>
    - open <code>src/services/epress/express.entrypoints.ts</code>. It is here you'll setup your routes.

  - <code>types/index.ts</code>
    - open <code>src/services/types/index.ts</code>. It is here you'll setup your types.

  - <code>constants.ts</code>
    - open <code>src/services/constants.ts</code>. dotenv has been configure here, and most env variables have been mapped to a a constant and exported for global use. add yours here. even the default PORT is here and is set to <code>8000</code>

  * * *