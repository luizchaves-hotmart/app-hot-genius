# <img src="https://app-vlc.hotmart.com/images/icons/hotmart-logo.svg" alt="Hotmart" width="220">

[![JS Hotmart Style](https://img.shields.io/badge/code%20style-hotmart-F04E23.svg)](https://www.npmjs.com/package/eslint-config-hotmart)

> Hotmart is the most comprehensive platform for those who wish to create a digital business.

# Quickstart App Microfront

## Technologies

##### Public Packages
* [React](https://github.com/facebook/react)
* [I18next](https://react.i18next.com)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [Styled Component](https://styled-components.com)
* [Webpack](https://webpack.js.org)
* [Jest](https://jestjs.io)
* [@testing-library](https://testing-library.com)

##### Private Packages
* [@hotmart/cosmos](https://github.com/Hotmart-Org/cosmos)
* [@hotmart/cas-js](https://github.com/Hotmart-Org/cas-js)

### For the first time only:

* Request to Diego Ribeiro(diego.ribeiro@hotmart.com) a client id for your application(staging and production)
* Before you start running the project, you must add the following host on your computer `/etc/hosts` file:
```
127.0.0.1       local.YOUR_MICROFRONT_NAME.buildstaging.com
```

## Configuring Environments

To connect to CAS, you must fill the environment variables in the files 
`/env/.development`, `/env/.staging` and `/env/.production`.

```
APP_HOST=?
AUTH_CLIENT_ID=?
```

Ex.:
```
APP_HOST=local.YOUR_MICROFRONT_NAME.buildstaging.com:8081
AUTH_CLIENT_ID=5a77109e-d66d-487f-c0b6-22fc8049a1c1
```

## Running

Installing components: <br />
You need to create the ".npmrc" file to access the private packages.

```sh
npm install
```

Starting on development mode:

```sh
npm run start
```

* Open http://local.YOUR_MICROFRONT_NAME.buildstaging.com:8081
* Have fun coding!

## Copyright
Hotmart &copy; 2020

Made with ❤
