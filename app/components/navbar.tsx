"use client";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";

export default function NavbarComponent() {
  const pathname = usePathname();

  return (
      <Navbar className="bg-card">
        <NavbarBrand className="h-full">
          <p className="text-xl text-font no-underline font-semibold">
            Fangxing.
          </p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem isActive={pathname === '/'}>
            <Link aria-current="page" color="foreground" href="/" className="text-xl text-font">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/about'}>
            <Link color="foreground" href="/about" className="text-xl text-font">
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/portfolio'}>
            <Link color="foreground" href="/portfolio" className="text-xl text-font">
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/contact'}>
            <Link color="foreground" href="/contact" className="text-xl text-font">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  );
}
  /**
     * 
    <nav className="navbar">
        <a href="/"className={pathname === '/' ? 'active' : ''}>Home</a>
        <a href="/about"className={pathname === '/about' ? 'active' : ''}>About</a>
        <a href="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</a>
        <a href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</a>
    </nav>
     */
