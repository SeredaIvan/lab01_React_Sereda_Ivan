function Cell(props) {
    // отримуємо з пропсу інфу про що ми маємо тут поставити
    return (
        <div className="block">
            {props.type !== null && (
                <img className="imgButtons" src={props.type}  />
            )}
        </div>
    );
}

export default Cell;
