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