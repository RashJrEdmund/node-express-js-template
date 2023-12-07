# Welcome to my node-express.js template 😌

<div align="center">
  <img src="./readme-assets/template.jpeg"></img>
</div>

if you are looking for a quick and ready to use typescript nodejs with express template,

    look no further 😌

  * * *

  made with ❤️  by [RashJrEdmund](https://github.com/RashJrEdmund)
  
  get your own copy [here](https://github.com/RashJrEdmund/node-express-js-template)

  * * *

## Description / Content

This template repo has been setup with <code>TypeScript</code>, <code>SASS</code>, <code>EJS</code> <code>MongoDb</code>, and <code>Mongoose</code>.
 Also, a simple user endpoint has been created with <code>/users</code>, and the actuall schema created mongoose and MongoDb initiallized, but will need your mongo_connections url.

- The app template has the following dependencies added to it.
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [CORS](https://www.npmjs.com/package/cors)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [concurrently](https://www.npmjs.com/package/concurrently)
  - [dotenv](https://www.npmjs.com/package/dotenv)

## Quick start

- run

  ```bash
    npx degit "RashJrEdmund/node-express-js-template" my-express-app
  ```

    To setup the repo locally. you can replace <code>my-express-app</code> with <code>your actuall app name</code>

### Afterwards

- run  <code>npm install</code> to install all neccesarry dependencies.

- open package.json or run <code>npm run</code> to see all available scripts.

- run <code>npm run dev</code> to start both sass:compiler and nodemone.

  * * *

## Files/Folders to Delete

- <code>readme-assets</code> (Folder)
  - run <code> rm -rf ./readme-assets</code> at the root of your project. it contains readme assest.

- <code>README.md</code> (File)
  - run <code> rm -rf ./README.md</code> at the root of your project. it contains readme it self.

  * * *

## Files to edit

- <code>server.ts</code>
  - open <code>src/server.ts</code>. it is the main entry point to the application.

- <code>express.app.ts</code>
  - open <code>src/services/express/express.app.ts</code> It here that the main middle-wares like <code>CORS</code> and <code>express.json()</code>. Even <code>ejs</code> has been setup as the templating enjine and the views directory set to views...

- <code>express.entrypoints.ts</code>
  - open <code>src/services/epress/express.entrypoints.ts</code>. It is here you'll setup your routes.

- <code>config.ts</code>
  - open <code>src/config/config.ts</code>. dotenv has been configure here, and the required configurations for ur app are here. like the db configs, app, jwt, bcrypt are all here. add anymore u see fit.

- <code>constants.ts</code>
  - open <code>src/services/constants.ts</code>. dotenv has also been configure here, you could add and load some of env or add constant data/state here.

- <code>interfaces/entities.ts</code>
  - open <code>src/utils/interfaces/entities.ts</code>. It is here you'll setup your TypeScript interfaces.

  * * *

## Contributing

- creat and issue, i'll review it, (review could take as long as 3days, depending on the issue).
- If it's ok, you can then work on it, the create PRs to the <code>dev</code> branch.
- Your PR should be titled feature/<code>< your fix(as shoten as possible):your github-username ></code>.
- Donnot or attempt force pushing.
- Donnot push your local test branches or any branches your created that donnot follow this format, and or have anything to do with your fix

## Deployment

- ### Render

  - hello world
