
//convierte la primera letra en mayúscula y devulve la palabra formateada
const capitalize = ([firstLetter, ...restOfWord]) =>
    firstLetter.toUpperCase() + restOfWord.join('')

    export {
        capitalize,
    }