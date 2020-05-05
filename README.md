# <img src="https://app-vlc.hotmart.com/images/icons/hotmart-logo.svg" alt="Hotmart" width="220">

[![JS Hotmart Style](https://img.shields.io/badge/code%20style-hotmart-F04E23.svg)](https://www.npmjs.com/package/eslint-config-hotmart)

> Hotmart is the most comprehensive platform for those who wish to create a digital business.

# Quickstart React with Typescript 

Getting Started with React and Typescript <br />
<b>status:</b> <i>in progress</i>

## Technologies

##### Public Packages
* [React](https://github.com/facebook/react)
* [I18next](https://github.com/facebook/react)
* [Redux](https://github.com/facebook/react)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [Sass](https://github.com/facebook/react)
* [Webpack](https://webpack.js.org)
* [Storybook](https://webpack.js.org)
* [Jest](https://webpack.js.org)
* [@testing-library](https://webpack.js.org)

##### Private Packages
* [@hotmart/cosmos](https://webpack.js.org)
* [@hotmart/request](https://webpack.js.org)

## Install Packages
You need to create the ".npmrc" file to access the private packages.

```
npm install
```

<hr />

## Development

```
npm run start
```

#### Storybook
```
npm run storybook
```

## Structure (Feature-by-folder) 
```
┌─────────┐
│ Project │
├─────────┘
│
├── components/  
   ├── table/
       ├── index.ts   
       ├── table.spec.tsx
       ├── table.component.tsx
       ├── table.component.scss
       ├── table.constants.ts
       ├── table.interfaces.ts
       ├── hooks/
           ├── use-table.spec.ts
           ├── use-table.hook.ts
           ├── use-table.interfaces.ts 
       ├── components/
           ├── table-row/
               ├── table-row.component.tsx
               ├── table-row.component.scss
               ├── table-row.component.spec
           ├── ...
   ├── ... 
```

<hr />

