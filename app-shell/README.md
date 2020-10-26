# <img src="https://app-vlc.hotmart.com/images/icons/hotmart-logo.svg" alt="Hotmart" width="220">

[![JS Hotmart Style](https://img.shields.io/badge/code%20style-hotmart-F04E23.svg)](https://www.npmjs.com/package/eslint-config-hotmart)

> Hotmart is the most comprehensive platform for those who wish to create a digital business.

# Quickstart App Shell

## Technologies

##### Public Packages
* [React](https://github.com/facebook/react)
* [I18next](https://www.i18next.com)
* [Redux](https://redux.js.org)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [Sass](https://sass-lang.com)
* [Webpack](https://webpack.js.org)
* [Jest](https://jestjs.io)
* [@testing-library](https://testing-library.com)

##### Private Packages
* [@hotmart/cosmos](https://github.com/Hotmart-Org/cosmos)

### For the first time only:

* Request to Diego Ribeiro(diego.ribeiro@hotmart.com) a client id for your application(staging and production)
* Before you start running the project, you must add the following host on your computer `/etc/hosts` file:
```
127.0.0.1       local.YOUR_APP_NAME.buildstaging.com
```

Open webpack.development file and change host
```
devServer: {
  contentBase: './public',
  host: 'local.YOUR_APP_NAME.buildstaging.com',
  ...
}
```

## Configuring CAS

To connect to CAS, you must fill the environment variables in the files 
`/env/.development`, `/env/.staging` and `/env/.production`.

```
AUTH_CLIENT_ID=?
```

Ex.:
```
AUTH_CLIENT_ID=5a97209e-d66d-487f-b0b6-22fc8049a1c1
APP_URL=http://local.databox.buildstaging.com:8080
```

## Running

Installing components: <br />
You need to create the ".npmrc" file to access the private packages.

```sh
npm install
```

Starting on development mode:

```sh
npm start
```

* Open http://local.YOUR_APP_NAME.buildstaging.com
* Have fun coding!

## Copyright
Hotmart &copy; 2020

Made with ❤
