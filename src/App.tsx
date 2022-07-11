import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <AppTitle/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return (
        <>This is App Title</>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    return <div>Star</div>;
}

export default App;
