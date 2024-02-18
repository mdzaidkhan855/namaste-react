1. git init
2. git branch -M main
3. git add .
4. git commit -m "episode 1"

// Only Once below one
5. git remote add origin https://github.com/mdzaidkhan855/namaste-react.git 

6. git push -u origin main

//Ignite project 
1. npm init
2. entry point : App.js
3. test command : jest

// NPM details 
 1. npm init => creates package.json
 2. npm install => creates and re-creates node_modules

 // vesions in package.json
 1. 2 types of dependencies -- dev and normal one
 2. 2 sings before packages => ^(kerat) for minor upgrade and ~(telda) for major upgrade
 3. package.lock.json has exact version, neither ^ nor ~

 // ignite app using parcel(which installed already: npm i -D parcel)
 1. command dev build and run : npx parcel index.html 
 2. Benefit of Parcel : a. Dev Build b.Local serve c. HMR(Hot module replacement) 
 3. HMR capablity comes through File Watching Algorithm written C++
 4. Caching - faset build -- creates parcel-cache
 5. Compress , Bundling
 6. Consistent Hashing, Code Splitting, Differential bundling(support older browser)
 7. Parcel helps to build for Https, so that u can do testing
 8. Beautiful diagnostic for error handling
 9. Tree shaking, minification -- remove unused code
 10. Different dev and prod bundle

 // Production ready build 
 1. Remove "main": "App.js" from package.json
 2. Run : npx parcel build index.html

 // Browser List
 1. apply "browserslist":["last 2 version"] in package.json for last 2 version of all browser support

 ############################  Episode:3 Laying The foudation #############################
 // Build script(in package.json) instead of using <npx parcel index.html> or <npx parcel build index.html>
 1. for dev: "start":"parcel index.html"
 2. for prod : "build":"parcel build index.html"
 3. Ignite the app in dev : <npm run start>  or <npm run build> (for prod)
 4. Or shorcut is : <npm start> 
 5. But for prod NO shortcut : only command is <npm run build>

 // JSX : jsx 
 1. JSX is NOT html in javascript. It's html/xml like syntax. more close to xml
 2. JSX is transpiled into javascript by parcel before it reaches to JS engine.
 3. And Parcel doing transpilation using Babel(javascript compiler or transpiler)
 4. JSX => React.createElement => React Element JS Object => HTMLElement(render)

 // VS code extension
 1. Pretty formatter 2. Bracket Pair Colorization Toggler

 // React Component
 1. Everything in React is component
 2. 2 types of component : Funcation(new way) and Class(old way) based components
 3. React functional component is just a normal Javascript function which returns some JSX.
 4. React function name MUST BE IN CAPITAL, OTHERWISE IT THROWS ERRORs

 ############################  Episode:4 Talk is cheap Show me the code #############################
 
