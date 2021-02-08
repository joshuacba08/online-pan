import React from 'react';

import './styles/DealsControl.css';

const DealsControl = ({ right, left}) => {
    

    return (
        <div>
            <button className="icon control control--left-row shadow-md"
                onClick={left}
            ></button>

            <button className="icon control control--right-row shadow-md"
                onClick={right}
            ></button>
        </div>
    )
}

export default DealsControl
