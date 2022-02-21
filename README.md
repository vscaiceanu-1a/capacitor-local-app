# CapLocalApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Prepare capacitor app

`npm install`

`npm run build`

`npx cap copy android`

`npx cap sync android`

`npx cap open android`


## Reproduction steps

1. Click on "GET call":
```
 I/Capacitor/Console: File: https://cap-remote-app.herokuapp.com/main.d86b46e144c05ce8.js - Line 1 - Msg: keys for capacitor {"keys":["key-from-capacitor"]}
```

2. Click on "POST call":
```
E/Capacitor/Console: File: https://cap-remote-app.herokuapp.com/main.d86b46e144c05ce8.js - Line 1 - Msg: ERROR Error: Uncaught (in promise): Error: "Storage" plugin is not implemented on android
    Error: "Storage" plugin is not implemented on android
```

## Remote app repo

* repo: https://github.com/vscaiceanu-1a/capacitor-remote-app
* deploy url: https://cap-remote-app.herokuapp.com/
