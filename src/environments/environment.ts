// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCEhtUFTh_IttqXiJwuY6k21lTIaB6sAtE',
    authDomain: 'ldg-2-0-1.firebaseapp.com',
    databaseURL: 'https://ldg-2-0-1.firebaseio.com',
    //databaseURL: `ws://127.0.1:5000`,
    projectId: 'ldg-2-0-1',
    storageBucket: 'ldg-2-0-1.appspot.com',
    messagingSenderId: '310398173528'
  }
};
