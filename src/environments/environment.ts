// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8081',
  firebase : {
    apiKey: "AIzaSyCOIY10_db6fTDwy2d-EDRwNJ3Cql9NsE0",
    authDomain: "employee-manager-9a317.firebaseapp.com",
    projectId: "employee-manager-9a317",
    storageBucket: "employee-manager-9a317.appspot.com",
    messagingSenderId: "107098279982",
    appId: "1:107098279982:web:0ac56e52bc1d2904350fbf",
    measurementId: "G-7PWSX35RFQ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
