import Cell from "./Cells.jsx";
import x from "../../public/images/x.svg";
import o from "../../public/images/o.svg";
import {useState} from "react";
import {isRequiredPropType} from "eslint-plugin-react/lib/util/props.js";

function Board() {
    //turn? obj?x:obj?o
    const [turn,setTurn]=useState(false)

    let [cells,setCells] = useState(
        Array.from({ length: 9 }, () => ({ type: null ,clicked:false}))
    )
    const handleClick=(index)=>{
        if (cells[index].clicked) return;
        const newCells=cells.map((cell,i)=>
            i === index ? { type: o, clicked: true } : cell
        )
        setCells(newCells);
    }

    return (
        <div className="flex-container">
            {cells.map((obj, index) => (
                <Cell key={index} type={obj.type} click={handleClick(index)}/>
            ))}
            <p>Ваш хід</p>
        </div>
    );
}

export default Board;
