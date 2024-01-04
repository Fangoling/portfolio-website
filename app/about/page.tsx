import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
      <Image
        src="/cat-images/I-ARE-PROGRAMMER.jpg"
        alt="Cat programming"
        width={450}
        height={450}
      />
  )
}
