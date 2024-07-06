import './global.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex justify-center'> 
      <div className="home-content">
        <h1>Hi, I&apos;m Fangxing Liu</h1>
        <h3>Computer Science Student</h3>
        <p>As an aspiring programmer with proficiency in Android Jetpack, Java, and C, I am looking forward to gain experience and enhance my skills. Currently, I am pursuing my studies at the Technical University of Munich.</p>
        <div className="btn-box">
            <a href="mailto:fxliu666@gmail.com">Let&apos;s Talk</a>
            <a href="https://www.linkedin.com/in/fangxingliu">Hire Me</a>
        </div>
      </div> 
    <Image 
        src="/cat-images/cat-coding.gif"
        alt="cat coding gif"
        width={450}
        height={450}
      />
    </main>
  )
}