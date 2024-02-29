// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  FIREBASE_API_KEY: process.env['FIREBASE_API_KEY'],
  FIREBASE_AUTH_DOMAIN: process.env['FIREBASE_AUTH_DOMAIN'],
  FIREBASE_DATABASE_URL: process.env['FIREBASE_DATABASE_URL'],
  FIREBASE_PROJECT_ID: process.env['FIREBASE_DATABASE_URL'],
  FIREBASE_STORAGE_BUCKET: process.env['FIREBASE_STORAGE_BUCKET'],
  FIREBASE_MESSAGING_SENDER_ID: process.env['FIREBASE_MESSAGING_SENDER_ID'],
  FIREBASE_APP_ID: process.env['FIREBASE_APP_ID']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
