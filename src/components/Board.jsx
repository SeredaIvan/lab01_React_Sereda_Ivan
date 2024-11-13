import Cell from "./Cells.jsx";
import WinBoard from "./WinBoard.jsx";
import x from "../../public/images/x.svg";
import o from "../../public/images/o.svg";
import { useState } from "react";

function Board() {
    const [iteratorTurn, setIteratorTurn] = useState(0);
    const [turn, setTurn] = useState(true);
    const [win, setWin] = useState(false);

    const [cells, setCells] = useState(
        Array.from({length: 9}, () => ({type: null, clicked: false}))
    );

    const handleClick = (index) => {
        if (cells[index].clicked) return;
        /*if (iteratorTurn === 0) {
            setIteratorTurn(iteratorTurn + 1);
            return;
        }*/
        const newCells = cells.map((cell, i) =>
            i === index ? {type: turnType(), clicked: true} : cell
        );
        setCells(newCells);
        setTurn(!turn);
        setIteratorTurn(iteratorTurn + 1);

        console.log(iteratorTurn);
        if (checkWin(newCells)) {
            console.log("Win")
            return;
        }

        if (iteratorTurn === 9) {
            console.log("Нічия")
            setWin(true)
            setTurn(null);
        }
    };
    const checkWin = (newCells) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (newCells[a].type && newCells[a].type === newCells[b].type && newCells[a].type === newCells[c].type) {
                setWin(true);
                return true;
            }
        }
        return false;
    };
    const turnType = (win=null) => {
        if(turn===null){
            return null
        }
        if(win!==null){
            return turn ? o : x
        }
        return turn ? x : o
    }
    return (
        <>
            {win ? (<WinBoard type={turnType("!")} />) : (
                <div className="flex-container">
                    {cells.map((obj, index) => (
                        <Cell key={index} type={obj.type} onClick={() => handleClick(index)}/>
                    ))}
                    <div className="iterator">
                        <p>Ваш хід</p>
                        <img style={{marginLeft: 10}} height={40} width={40} src={turnType()}/>
                    </div>
                </div>)}
        </>
    );
}

export default Board;
