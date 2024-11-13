import React from 'react';

function WinBoard(props) {
    return (

        <div className="winBlock">
            <div className="winner">
            {props.type === null
                ? <>Нічия</>
                : <>Виграв <img style={{marginLeft: 20}} height={60} width={60} src={props.type} alt="icon"/></>}
            </div>
                <button style={{flex:1}} onClick={()=>{
                window.location.reload();
            }}>Заново</button>
        </div>
    );
}
export default WinBoard;
