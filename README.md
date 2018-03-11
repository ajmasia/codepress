# CodePress 0.1
A simple blogging template

## Instalation

This app uses [json-server](https://github.com/typicode/json-server) as a virtual API Rest server engine to work. Before running this app you must start [json-server](https://github.com/typicode/json-server) to work.

To install CodePress template, move to app´s root directory and run `npm install` or `npm i`

When you install the app, you must configure the system parameters. You can do it by editing the file `config.js`. If you are going to test the app on a local server, you can use default parameters.

```js
module.exports = {
    serviceURL: process.env.SERVICE_URL || 'http://localhost:',
    servicePORT: process.env.SERVICE_PORT || 3001,
    commentsCollection: process.env.COLLECTION_NAME || 'comments/'
}
```
## Start scripts

CodePress works with the [Webpack](https://github.com/webpack/webpack). Run any of the following commands depending on how you want to work:

| Command  | Mode |
| ------------- | ------------- |
| `npm run webpack` | Execute webpack in dev mode |
| `npm run webpacl-dev` | Execute webpack in changes observe dev mode |
| `npm run webpack-dev-server` | Execute webpack with automatic browser reload dev server |
| `npm run webpack-build` | Execute webpack in production mode |
| `npm run json-server` | Run json-server in observe mode |
| `npm run json-server-build` | Run json-server in static web server and observe mode to test webpack builds apps |

## Implementen Features
- Responsive desging with [Bootstrap 4](https://getbootstrap.com/)
- [Smooth scroll](https://github.com/cferdinandi/smooth-scroll)
- Images placehoders
- Dinamic metadata template
- Dynamic dates calculation with [moment](https://momentjs.com/) library
- Like button whithout persistence
- Categories without persistence
- Posts list and post details templates
- Post navigation
- Dynamic comments system
- Comments with [gravatars](https://www.npmjs.com/package/gravatar)


## More information
In upcoming reviews more ....
