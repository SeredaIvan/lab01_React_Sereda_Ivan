import Cell from "./Cells.jsx";
import x from "../../public/images/x.svg";
import o from "../../public/images/o.svg";

function Board() {
    const array = Array.from({ length: 9 }, () => ({ type: null }));

    return (
        <div className="flex-container">
            {array.map((obj, index) => (
                <Cell key={index} type={obj.type} />
            ))}
            <p>Ваш хід</p>
        </div>
    );
}

export default Board;
