# netdirector-ownership

## Deploy to firebase:
```
firebase deploy --only hosting
```

## Project setup

1. Install NDC package (on Windows: please remove the .npmrc before do the below command)
```
npm run preinstall:local
```

2. Install global
```
npm install
```

## What is the gulpfile.js?
When the build process finished, the vue cli will put all the compliled js/css files into the './dist/'

eg: chunk-vendor.js, app.js, app.css, ...etc

So when we implement the application on the V10 site that we need to import all above files as well.

To make it easy, we use the gulp plugin to link all of them into the one file 'init.js' and another purpose that we need to change the base-url for each enviroment.

eg:

Development: https://ownership.rd.gforcesinternal.co.uk/init.js

Production: https://ownership.netdirector.co.uk/init.js


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build-development
npm run build-production
npm run build-staging
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).