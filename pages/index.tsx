import {useState} from 'react'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RandomFox } from '@/components/RandomFox'

const inter = Inter({ subsets: ['latin'] })

const random = () => Math.floor(Math.random() * 123) +1;

export default function Home() {

  // const [images, setImages] = useState<string[]>([
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <main
      
    >
      <h1 className="text-3xl font-bold underline">Hey Platzi 😎!</h1>
      {images.map( (image, index) => (
        <div key={index} className="p-4">
          <RandomFox image={image} />
        </div>
      )

      )}
      
    </main>
  )
}
