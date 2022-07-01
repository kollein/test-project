const fs = require('fs');
const { src, dest } = require('gulp');
const map = require('map-stream');
const package = require('./package.json');
const exec = require('child_process').exec;
const argv = require('yargs').argv;
const env = require('gulp-env');
const run = require('gulp-run-command').default;
const Promise = require('bluebird');
const chalk = require('chalk');
const loadingSpinner = require('loading-spinner');
const version = (Math.random() + 1).toString(16).substring(9);
const { log } = console;

const runCommand = async (cmd) => {
  return new Promise((resolve, reject) => {
    log(chalk.green(`run command: ${cmd}`));

    loadingSpinner.start(100, {
      clearChar: true,
      clearLine: true,
    });

    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        log(chalk.bgGreen(`finish command: ${cmd}`));
        log(chalk.white(stdout));
        loadingSpinner.stop();
        resolve();
      }
    });
  });
};

function applicationPath() {
  switch (argv.env) {
    case 'production':
      return `https://listing-search.web.app/`;
    case 'staging':
      return `https://listing-search.web.app/`;
    default:
      return `https://listing-search.web.app/`;
  }
}

function defaultBuildFile() {
  const path = applicationPath();
  const basePath = `${path}`;
  return src('./public/js/init.js')
    .pipe(
      map((file, cb) => {
        let fileContents = file.contents.toString();
        // --- do any string manipulation here ---
        fileContents = fileContents.replace(`const base = '/';`, `const base = '${basePath}';`);
        fileContents = fileContents.replace(
          `const version = '0.0.0';`,
          `const version = '${version}';`,
        );
        // ---------------------------------------
        file.contents = new Buffer.from(fileContents);
        cb(null, file);
      }),
    )
    .pipe(dest('dist/js/'));
}

async function build() {
  const path = applicationPath();

  // Added version to process.env for using in vue.config.js file
  env({
    vars: {
      VUE_APP_VERSION: version,
      VUE_APP_PUBLIC_PATH: '/',
    },
  });

  try {
    await runCommand(`npm run build -- --mode ${argv.env} --root`);
  } catch (err) {
    log(chalk.yellow(err));
    throw err;
  }

  return defaultBuildFile();
}

async function serve() {
  // Added version to process.env for using in vue.config.js file
  env({
    vars: {
      // set the version to match the version in init.js file
      VUE_APP_VERSION: '0.0.0',
      VUE_APP_PUBLIC_PATH: '/',
    },
  });

  // check we have a local env file available for serve
  if (!fs.existsSync('./.env.development.local')) {
    log(
      chalk.bgRed(
        `ERROR: Cannot find .env.development.local file in the root, please make sure you copy the .env.development.local.sample file and remove sample from the end.`,
      ),
    );
    return;
  }

  try {
    await run(`vue-cli-service serve`)();
  } catch (err) {
    log(chalk.yellow(err));
    throw err;
  }
}

exports.build = build;
exports.serve = serve;
