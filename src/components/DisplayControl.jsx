import React, { useState } from 'react';

import './styles/DisplayControl.css';

const DisplayControl = ({category, query, changeDisplay}) => {

    const [stateGrid, setStateGrid] = useState('icon-selected');
    const [stateList, setStateList] = useState('icon-no-selected');

    const changeStateGrid = () => {
        // if(stateGrid==="icon-no-selected") {
            setStateGrid('icon-selected')
            setStateList('icon-no-selected')
            changeDisplay("grid");
        // } 
    }

    const changeStateList = () => {
        // if (stateList === "icon-no-selected") {
            setStateList('icon-selected')
            setStateGrid('icon-no-selected')
            changeDisplay("list");
        // }

    }
    
    return (
        <div className="control-container">
            {category!==undefined&&
                <p className="control-container__title">Productos de {category}</p>
            }
            {query !== undefined &&
                <p className="control-container__title">Resultado para "{query}"</p>
            }
            {(query === undefined && category === undefined) &&
                <p className="control-container__title">Todos los productos</p>
            }

            <div className="control-buttons">
                <button className={`icon button-style icon--grid ${stateGrid}`}
                        onClick={changeStateGrid}
                ></button>
                <button className={`icon button-style icon--list ${stateList}`}
                        onClick={changeStateList}
                ></button>
            </div>
        </div>
    )
}

export default DisplayControl
