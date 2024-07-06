import type { Metadata } from 'next'
import './global.css'
import { Montserrat } from 'next/font/google'
import Navbar from './components/navbar'
import {Providers} from "./providers"


const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Fangxing Liu | CS Student & App/Web Developer",
  description: "A website with Information about my portfolio and how to contact me",
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en" className={`${montserrat.variable}`}>

      <head>
        <meta name="description" content="As an aspiring programmer with proficiency in Android Jetpack, Java, and C, I am looking forward to gain experience and enhance my skills. Currently, I am pursuing my studies at the Technical University of Munich."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>Fangxing Liu - App/Web Developer</title>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body>
        <Providers>

        <header className="header">
          <a href="/" className="logo">Fangxing.</a>
          <Navbar/>
        </header>

        <main>
          <div className="children-container">
            {children}
          </div>
        </main>

        <footer className="footer">
          <div className="footer-icons">
            <a href="https://github.com/Fangoling"><i className='bx bxl-github'></i></a>
            <a href="https://discordapp.com/users/327905667778347019"><i className='bx bxl-discord'></i></a>
            <a href="https://www.linkedin.com/in/fangxingliu"><i className='bx bxl-linkedin-square'></i></a>
          </div>
        </footer>

        </Providers>
      </body>
    </html>
  )
}
