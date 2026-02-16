import React from "react";
import "./App.css"
import {Button} from 'react-bootstrap';

 

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <p>By Ricardo Aguado Serino and Diego AS</p>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
       <h1> <span style={ {color: 'purple'} }>This will be my added header</span></h1>
       <img src="https://i.redd.it/the-original-marathon-art-by-craig-mullins-v0-ghb3fjqqj22b1.jpg?width=1000&format=pjpg&auto=webp&s=d722042bb899955120a6751e5dc7c8f340da718d" alt="Marathon Concept Art" />    
       Bungie Games List
       <ul>
        <li>Marathon</li>
        <li>Halo</li>
        <li>Destiny</li>
       </ul>
       
       <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
    </div>
    );

}

export default App;
