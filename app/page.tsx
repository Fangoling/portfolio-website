import './global.css'
import Image from 'next/image'
import {Button} from '@nextui-org/button'

export default function Home() {
  return (
    <main className='flex justify-center'> 
      <div className="home-content">
        <h1>Hi, I&apos;m Fangxing Liu</h1>
        <h3>Computer Science Student</h3>
        <p>As an aspiring programmer with proficiency in Android Jetpack, Java, and C, I am looking forward to gain experience and enhance my skills. Currently, I am pursuing my studies at the Technical University of Munich.</p>
      </div> 
    </main>
  )
}