import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './App.scss';

const Test = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>INCREMENT</button>
        </div>
    )
}

let root = document.getElementById('root');
root && ReactDom.render(<Test />, root);