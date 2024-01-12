// import React from 'react'

/*
    Aqui se definen cuatro formas de crear un componente de react con typescript
*/

import {useRef, useEffect, useState } from 'react'
// import (useRef) from 'react';


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

    //Asignar null aqui es muy importante tenerlo en cuenta
    const node = useRef<HTMLImageElement>(null)
    const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

    useEffect(() => {
        // Nuevo observador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    setSrc(image)
                    console.log("Hey you!")
                    console.log(entry)
                }
            })
        });


        // Observar nodo
        if (node.current){
            observer.observe(node.current);
        }
        
        

        // Desconectarnos
        return () => {
            observer.disconnect()
        }

    }, [image])

    
    // node.current.src
    // const image: string =  
    return <img 
        src={src} // con destructing
        // src={props.image} sin destructing
        width={320}
        height="auto"
        alt="" 
        className='rounded bg-gray-300'
        ref={node}
    />
}


// Las dos siguientes ya estan deprecadas pero se pueden encontrar en algunos proyectos
// export const RandomFox3:FunctionComponent = () => {
//     return <img src="" alt="" />
// }


// export const RandomFox4:FC = () => {
//     return <img src="" alt="" />
// }

