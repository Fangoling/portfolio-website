import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="home-content">
        <h1>Hi, I&apos;m Fangxing Liu</h1>
        <h3>CS Student at TUM</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus exercitationem nam quia hic, minus earum possimus nihil iusto sunt accusantium?</p>
        <div className="btn-box">
            <a href="mailto:fxliu666@gmail.com">Let&apos;s Talk</a>
            <a href="https://www.linkedin.com/in/fangxingliu">Hire Me</a>
        </div>
      </div> 
    </main>
  )
}
