import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = 
     (
        <div>
            <h1>React Hello World from react element🚀 </h1>
            <h2>React Hello World 🚀 </h2>
        </div>
        
    )

const HeadingComponent = ()=>
     (
        <div>
            {heading}
            <h1>React Hello World 🚀 </h1>
            <h2>React Hello World 🚀 </h2>
        </div>
        
    )


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
//root.render(heading);