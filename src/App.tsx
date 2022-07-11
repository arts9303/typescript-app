import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle title={"This is App Title"} />
            <Rating value={3} />
            <Accordion title={"Menu"} />
            <Rating value={2} />
        </div>
    );
}

function AppTitle(props: any) {
    return (
        <h1>{ props.title }</h1>
    );
}

export default App;
