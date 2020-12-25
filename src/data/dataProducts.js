import buniuelos from "../assets/img/buniuelos.jpg";
import medialunas from "../assets/img/medialunas.jpg";
import donas from "../assets/img/donas.jpg";

/*Por el momento no voy a tocar mucho el componente donde tengo los demás productos
por cuestiones de tiempo, pero la idea sería que todos los productos vayan acá y que
contengan una propiedad booleana que indique si está en oferta o no. Posteriormente
pienso subirlo a Firebase*/

export const products = [
    {
        itemID: 4,
        bread: buniuelos,
        breadName: 'Buñuelos',
        price: 150,
        negativeVotes: 18,
        positiveVotes: 60,
        stock: 10,
        sale:false,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    }, 
    {
        itemID: 5,
        bread: medialunas,
        breadName: 'Medialunas',
        price: 300,
        negativeVotes: 25,
        positiveVotes: 75,
        stock: 12,
        sale: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    }, 
    {
        itemID: 6,
        bread: donas,
        breadName: 'Donas',
        price: 180,
        negativeVotes: 10,
        positiveVotes: 75,
        stock: 12,
        sale: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquet justo. Sed vehicula volutpat tellus quis commodo.',
    }, 
];