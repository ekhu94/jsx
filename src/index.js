import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <label className="label" for="name">Enter your name: </label>
            <input id="name" type="text" placeholder="Goro" />
            <button style={{color: 'white', backgroundColor: 'purple'}}>Submit</button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);