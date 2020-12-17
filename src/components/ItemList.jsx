import React from 'react'
import panDeMolde from '../assets/img/PanDeMolde.jpg';
import panBaguette from '../assets/img/baguette.jpg';
import melonBread from '../assets/img/MelonBread.jpg'
const ItemList = () => {
    const productList = [
        {   
            itemID:1,
            bread: {panDeMolde},
            breadName: 'Pan de molde',
            price: 200,
            negativeVotes: 30, 
            positiveVotes: 90,
            stock: 7,
        } 
        {
            itemID: 2,
            bread: { panBaguette },
            breadName: 'Pan baguette',
            price: 140,
            negativeVotes: 50,
            positiveVotes: 100,
            stock: 5,
        }
        {
            itemID: 3,
            bread: { melonBread },
            breadName: 'Melon pan',
            price: 110,
            negativeVotes: 10,
            positiveVotes: 100,
            stock: 10,
        }
    ]
    return (
        <div>
            
        </div>
    )

}

export default ItemList
