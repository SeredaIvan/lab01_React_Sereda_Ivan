import { useState } from 'react';
import './App.css';
import o from '/public/images/o.svg';
import x from '/public/images/x.svg';
import Board from "./components/Board.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Board />

        </>
    );
}

export default App;
