// import React from 'react'

/*
    Aqui se definen cuatro formas de crear un componente de react con typescript
*/

import { on } from 'events';
import {useRef, useEffect, useState, lazy } from 'react'
import type {ImgHTMLAttributes} from 'react'

// import fs from 'fs';

// import (useRef) from 'react';


//Implicito
// export const RandomFox2 = () => {
//   return <img src="" alt="" />
// }

type LazyImageProps = {
    src: string,
    onLazyLoad?: (node: HTMLImageElement) => void,
}

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

//Explicito, esta es la manera que se debe utilizar
// export const RandomFox = (props:Props):JSX.Element => {  // Uso de props sin destructing 
export const LazyImage = ({src, onLazyLoad, ...ImgProps}:Props):JSX.Element => { // Uso de props con destructing

    //Asignar null aqui es muy importante tenerlo en cuenta
    const node = useRef<HTMLImageElement>(null)
    const [loaded, setLoaded] = useState(false);
    const [currentSrc, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

    useEffect(() => {

        if (loaded) {
            return
        }
        // Nuevo observador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    setSrc(src)

                    if (typeof onLazyLoad === 'function' && node.current){
                        onLazyLoad(node.current);
                        observer.disconnect();
                        setLoaded(true);
                    }
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

    }, [src, onLazyLoad])

    
    // node.current.src
    // const image: string =  
    return <img 
        src={currentSrc} // con destructing
        // src={props.image} sin destructing
        
        ref={node}
        // onClick={onClick}
        {...ImgProps}
    />
}


// Las dos siguientes ya estan deprecadas pero se pueden encontrar en algunos proyectos
// export const RandomFox3:FunctionComponent = () => {
//     return <img src="" alt="" />
// }


// export const RandomFox4:FC = () => {
//     return <img src="" alt="" />
// }

