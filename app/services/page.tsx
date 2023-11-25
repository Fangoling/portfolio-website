import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <main>
      <Image
        src="/cat-images/recursion-cat.jpg"
        alt="cat recursion"
        width={450}
        height={450}
      />
    </main>
  )
}
