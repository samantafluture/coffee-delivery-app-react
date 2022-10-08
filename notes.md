# Project Creating Cheat Sheet

> React with TypeScript

----------------------------------------------------

## Create the project with Vite

- [x] Open the terminal
- [x] Go to the directory where you want to save the app
- [x] Run Vite command `npm create vite@latest`
- [x] Give the project a name
- [x] Then go to the directory of the app and `code .`
- [x] Install the dependencies with the command `npm install` and run the project with `npm run dev` 
- [x] Clean the files and directories
- [x] Create repository and push to github
- [ ] 
----------------------------------------------------

## Define default theme and global styles

- [x] Install style dependencies: 
  - [x] `npm i styled-components`
  - [x] `npm i @types/styled-components`
  - [x] `npm i phosphor-react`
- [x] Create following directories and files:
  - [x] .src/styles/themes/default.ts 
  - [x] .src/styles/global.ts
  - [x] .src/@types/styled.d.ts
- [x] Export logo from Figma as SVG and save it in ./src/assets
- [x] Get the fonts from Google Fonts
- [ ] Create theme and global styles
  - [x] Extract colors from Figma at theme file 
  - [x] Define style-components types at the file /styled.d.ts
    - [x] The first theme has to be named `defaultTheme`
  - [x] Create global styles that are going to be applied to all the components

----------------------------------------------------

## Organize layouts, pages and main components using Router

- [x] Install router dependencies:
  - [x] `npm i react-router-dom`
- [x] Add `<ThemeProvider theme={defaultTheme}>` and `<GlobalStyle />` to the ./App.tsx
- [x] Create header component structure and style
- [x] Create DefaultLayout
  - [x] Directory .src/layouts/DefaultLayout
  - [x] Inside, create index.tsx and styles.ts
  - [x] This will be the layout for the app
  - [x] Inside, import component Header (fixed) and `<Outlet />` (the content that changes)
- [x] Create Router.tsx file in .src/
  - [x] Create folder ./src/pages with pages inside
    - [x] Each page should have its won directory and the files index.tsx and styles.ts
  - [x] Import pages to the Router file and give them paths
  - [x] Update the App.tsx with the Router configuration

----------------------------------------------------

## Create structure and style of pages and main components

- [x] Create home page
  - [] Create structure of the page divided into components
  - [ ] Style the home page
  - [ ] Each component should have its own directory with index.tsx and styles.ts
  - [ ] Style each component


----------------------------------------------------

## To Do's
 
- [ ] Insert mock coffee cards into Home page
- [ ] Nav bar should be fixed according to Figma


----------------------------------------------------

## Important files

[Notion Description](https://efficient-sloth-d85.notion.site/Desafio-02-Coffee-Delivery-30e42a21fdb44b09a85244fc2c3dbdf9)
[Figma UI](https://www.figma.com/file/Tm4YeaBAni3mSNRIbhvn0q/Coffee-Delivery-(Copy)?node-id=0%3A1)