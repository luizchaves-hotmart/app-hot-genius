# <img src="https://app-vlc.hotmart.com/images/icons/hotmart-logo.svg" alt="Hotmart" width="220">

[![JS Hotmart Style](https://img.shields.io/badge/code%20style-hotmart-F04E23.svg)](https://www.npmjs.com/package/eslint-config-hotmart)

> Hotmart is the most comprehensive platform for those who wish to create a digital business.

# Quickstart React with Typescript 

Getting Started with React and Typescript <br />
<b>status:</b> <i>in progress</i>

## Technologies

##### Public Packages
* [React](https://github.com/facebook/react)
* [I18next](https://www.i18next.com)
* [Redux](https://redux.js.org)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [Sass](https://sass-lang.com)
* [Webpack](https://webpack.js.org)
* [Storybook](https://storybook.js.org)
* [Jest](https://jestjs.io)
* [@testing-library](https://testing-library.com)

##### Private Packages
* [@hotmart/cosmos](https://github.com/Hotmart-Org/cosmos)
* [@hotmart/request](https://github.com/Hotmart-Org/request)

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
       ├── stories/
           ├── table.stories.tsx 
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

