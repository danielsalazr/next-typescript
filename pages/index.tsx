import {useState} from 'react'
import type {MouseEventHandler,} from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RandomFox } from '@/components/RandomFox'

const inter = Inter({ subsets: ['latin'] })

const random = () => Math.floor(Math.random() * 123) +1;

const generateID = () => Math.random().toString(36).substr(2,9);

type ImageItems = {
  id: string,
  url: string,
}

// generate Simple unique id

export default function Home() {

  // const [images, setImages] = useState<string[]>([
  const [images, setImages] = useState<Array<ImageItems>>([
    {id:generateID(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id:generateID(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id:generateID(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id:generateID(), url: `https://randomfox.ca/images/${random()}.jpg`},
  ]);

  const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    // console.log(event.target)
    const newImage:ImageItems = {
      id: generateID(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    }
    setImages([...images, newImage])
  }

  return (
    <main
      
    >
      <h1 className="text-3xl font-bold underline">Hey Platzi 😎!</h1>
      <button onClick={addNewFox}>Add Fox</button>
      {images.map( ({id, url}) => (
        <div key={id} className="p-4">
          {/* <h6>{id}</h6> */}
          <RandomFox image={url} />
        </div>
      )

      )}
      
    </main>
  )
}
