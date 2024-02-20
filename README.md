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
 1. props are just an argument passed to functional component, which is at the end of day is norma JS Func.
 2. Install Json viewer as chrome extension. JSON data in browser will look cool.
 3. Design principle : Config driven UI used in front end system design
 4. Our website driven by data, which is basically driven by config
 5. Swiggy food offer differs for different region is an example of config driven

 // Key while using map
 1. Use key as props , so that react does not need to render all the item
 2. Never user index as key while looping using map. Create a field "id" in json and use that , instead.

############################  Episode:5 LET's get Hooked up #############################
 // default/named export and import 
 1. Default : a. export default Component b. import Component from "Path"
 2. Named : a. export const Component b. import {Component} from "Path"

 // WHY REACT FAST, RE-RENDERING , RECONCILIATION etc.
 1. Reconciliation Algoithm also known as React Fibre
 2. React creates Virtual DOM -- representation of actual DOM( tags like <div/><h1/> etc.)
 3. Virtual DOM is basically react elements( react object)
 4.  Diff algorithm finds the difference between New Virtual DOM and Updated Virtual DOM.
 5. Finding diff between 2 objcets is easier than finding between 2 DOM.
 6. Once React finds difference between 2 objects(that is Virtaul DOM), then it actually updates real DOM.
 7. This eficient DOM manipulation is because of Incremental manipulation.
 8. Key Words: Reconciliation Algoithm, React Fibre , Virtual DOM(react element/javascript object), Real DOM
 9. AND THIS MANIPULATION HAPPENS EVEYTIME STATE CHANGES.=> STATE MANAGEMENT

 ####################### Episode:6 Exploring the World : Basically API CALL mainly ########################
 1. There are 2 approaches to load data
 2. As soon as page loads, we make API call. when we get data, we render the UI
 3. Suppose API call takes 500 ms. So after 500 ms, we render the data
 4. Second approache => As soon as page loada, we render UI quickly(SKeleton).
 5. After UI rendering, we re-render UI after data comes as response.
 6. In React, we will use 2ND APPROACH. Better UX experience.
 7. In 1st approach, it's kind of frozen... Poor UX experience.
 8. Although 2 times rendering in react, it does not matter as it is very fast.
 9. Conclusion 2nd approach: Load => render => API => Re-render
 10. Conclusion 1st approach : Load => API => Render.
 11. useEffect is called after component renders.
 12. Showing loader is not good way, instead show shimmer UI.
 13. Shimmer UI is fake page, which resembles actual but not actual: Much better UX experience.
 14. Conditional rendering : while data being loaded, you can return shimmer.


