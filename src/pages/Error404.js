import React from 'react'
import './styles/Error404.css'

const Error404 = () => {
    return (
        <>
            <div className="error-container">
                <h2 className="error-container__title">¡PÁGINA CON POCA LEVADURA!</h2>
                <p className="error-container__mensaje">Ups algo en la receta salió mal...<br/>- Error 404 -</p>                
            </div>    
        </>
    )
}

export default Error404
