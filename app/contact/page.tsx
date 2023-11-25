import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <main>
      <Image
        src="/cat-images/bingus-cat-calling.jpg"
        alt="bingus cat calling"
        width={450}
        height={450}
      />
    </main>
  )
}
