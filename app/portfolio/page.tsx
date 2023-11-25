import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <main>
      <Image
        src="/cat-images/cat-meme-html.jpg"
        alt="html cat"
        width={450}
        height={450}
      />
    </main>
  )
}
