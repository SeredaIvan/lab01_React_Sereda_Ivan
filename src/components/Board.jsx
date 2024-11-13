import Cell from "./Cells.jsx";
import x from "../../public/images/x.svg";
import o from "../../public/images/o.svg";
import { useState } from "react";

function Board() {
    const [iteratorTurn, setIteratorTurn] = useState(0);
    const [turn, setTurn] = useState(true);

    const [cells, setCells] = useState(
        Array.from({ length: 9 }, () => ({ type: null, clicked: false }))
    );

    const handleClick = (index) => {
        if (cells[index].clicked) return;
        if (iteratorTurn===0){
            setIteratorTurn(iteratorTurn + 1);
            return;
        }
        const newCells = cells.map((cell, i) =>
            i === index ? { type: turn ? x : o, clicked: true } : cell
        );
        setCells(newCells);
        setTurn(!turn);
        setIteratorTurn(iteratorTurn + 1);
        console.log(iteratorTurn);
    };

    return (
        <div className="flex-container">
            {cells.map((obj, index) => (
                <Cell key={index} type={obj.type} onClick={() => handleClick(index)} />
            ))}
            <div className="iterator">
                <p style={{color:"black"}}>Ваш хід</p>
                <img style={{marginLeft:10}} height={40} width={40} src={turn ? x : o} />
            </div>
        </div>

    );
}

export default Board;
