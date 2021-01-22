import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext';
import { getFirestore } from '../data/importData'
import firebase from 'firebase/app';
import useForm from '../Hooks/useForm';

import './styles/CheckoutForm.css';

const CheckoutForm = () => {

    const db = getFirestore();

    const cartContext = useContext(CartContext);
    const { cart, setCart, subTotal } = cartContext;
    const [venta, completoVenta] = useState(false);
    const [idCompra, setIdCompra] = useState('');
    const [ formValues, handleInputChange ] = useForm({
        name:'',
        lastName:'',
        email:'',
        telephone:'',
    });

    const { name, lastName, email, telephone } = formValues;

    const compra = {
        user: formValues,
        items: cart,
        totalPrice: subTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
            .then(({ id }) => {
                completoVenta(true);
                setIdCompra(id);
                setCart([]);
                console.log(id);
            })
            .catch(e => console.log(e));
    }

    return (
        <>{
            !venta?
            <form onSubmit={handleSubmit} className="checkout-form">
                <h3>Ingresa tus datos</h3>

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Apellido"
                        autoComplete="off"
                        value={lastName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="email@gmail.com"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="telephone"
                        className="form-control"
                        placeholder="011-23232323"
                        value={telephone}
                        onChange={handleInputChange}
                    />
                </div>


                <button type="submit" className="buy-confirm">
                    Confirmar compra
                </button>

            </form> :
                <p className="buy-finished">La compra se realizó correctamente, el número de seguimiento de tu compra es: <strong>{idCompra}</strong></p>
        }</>
    )
}

export default CheckoutForm
