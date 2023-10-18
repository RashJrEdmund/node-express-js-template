## Welcome to my node sandbox.
	😌
### links to deploments below;
- [file upload with multter](https://link_to_multer.com)

{
  "name": "mini-link_redirect",
  "version": "1.0.0",
  "description": "url shortener for minifying long links, this app is a single service for redirecting",
  "main": "index.ts",
  "scripts": {
    "build": "node -e \"const readlineSync = require('readline-sync'); if (readlineSync.keyInYN('Are you sure you want to execute this build script? all .ts files will have a corresponding .js files just next to them')) { require('./local-build-script.js'); } else { console.log('Script execution cancelled.'); }\"",
    "build:ts": "npx tsc",
    "build:all": "run-p build:ts sass",
    "start": "node build/src/index.js",
    "start:watch": "nodemon src/index.ts",
    "sass": "sass src/sass:src/public/styles",
    "sass:watch": "sass --watch src/sass:src/public/styles",
    "dev": "run-p start:watch sass:watch",
    "dev:concurrently": "concurrently \"npm run start:watch\" \"npm run sass:watch\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "url",
    "shortener",
    "urlshortener",
    "url-shortener",
    "minilink",
    "mini-link",
    "shorten"
  ],
  "author": "orashus",
  "license": "ISC",
  "dependencies": {
    "@types/mongoose": "^5.11.97",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "mongodb": "^6.1.0",
    "mongoose": "^7.5.4",
    "nodemon": "^3.0.1",
    "sass": "^1.64.1"
  },
  "devDependencies": {
    "@types/cors": "^2.8.14",
    "@types/express": "^4.17.18",
    "@types/node": "^20.8.3",
    "concurrently": "^8.2.1",
    "npm-run-all": "^4.1.5",
    "readline-sync": "^1.4.10",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.2.2"
  }
}
