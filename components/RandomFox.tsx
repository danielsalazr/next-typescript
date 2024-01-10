// import React from 'react'

/*
    Aqui se definen cuatro formas de crear un componente de react con typescript
*/

import type {FunctionComponent, FC } from 'react'


//Implicito
// export const RandomFox2 = () => {
//   return <img src="" alt="" />
// }

type Props = {
    image: string,
}


//Explicito, esta es la manera que se debe utilizar
// export const RandomFox = (props:Props):JSX.Element => {  // Uso de props sin destructing 
export const RandomFox = ({image}:Props):JSX.Element => { // Uso de props con destructing
    // const image: string =  
    return <img 
        src={image} // con destructing
        // src={props.image} sin destructing
        width={320}
        height="auto"
        alt="" 
        className='rounded'
    />
}


// Las dos siguientes ya estan deprecadas pero se pueden encontrar en algunos proyectos
// export const RandomFox3:FunctionComponent = () => {
//     return <img src="" alt="" />
// }


// export const RandomFox4:FC = () => {
//     return <img src="" alt="" />
// }

