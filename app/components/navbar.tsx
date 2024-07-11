"use client";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = {
    Home: "/",
    About: "/about",
    Portfolio: "/portfolio",
    Contact: "/contact",
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-card">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="block hidden:xl"
        />
        <NavbarBrand className="h-full">
          <p className="text-xl text-font no-underline font-semibold">
            Fangxing.
          </p>
        </NavbarBrand>
      </NavbarContent>

        <NavbarContent className="hidden xl:block gap-4 flex-wrap" justify="center">
          <NavbarItem isActive={pathname === "/"}>
            <Link
              aria-current="page"
              color="foreground"
              href="/"
              className="text-xl text-font"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/about"}>
            <Link
              color="foreground"
              href="/about"
              className="text-xl text-font"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/portfolio"}>
            <Link
              color="foreground"
              href="/portfolio"
              className="text-xl text-font"
            >
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/contact"}>
            <Link
              color="foreground"
              href="/contact"
              className="text-xl text-font"
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      <NavbarMenu className="bg-primary">
        {Object.entries(menuItems).map(([label, path]) => (
          <NavbarMenuItem key={label}>
            <Link className="w-full text-font" href={path} size="lg">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
