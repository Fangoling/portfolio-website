"use client"
import { usePathname } from "next/navigation"
import React from "react"


export default function Navbar() {
    const pathname = usePathname() 

    return(
    <nav className="navbar">
        <a href="/"className={pathname === '/' ? 'active' : ''}>Home</a>
        <a href="/about"className={pathname === '/about' ? 'active' : ''}>About</a>
        <a href="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</a>
        <a href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</a>
    </nav>
    )

}