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
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-card",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="smallscreen"
        />
        <NavbarBrand className="h-full">
          <p className="text-xl text-font no-underline font-semibold">
            Fangxing.
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="bigscreen gap-4 flex-wrap" justify="center">
        {Object.entries(menuItems).map(([label, path]) => (
          <NavbarItem key={label} isActive={pathname === path}>
            <Link
              aria-current="page"
              color="foreground"
              href={path}
              className={`text-xl text-font"
                  ${
                    pathname === path
                      ? "after-content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-[2px] after:bg-secondary"
                      : ""
                  }`}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-primary items-center">
        {Object.entries(menuItems).map(([label, path]) => (
          <NavbarMenuItem key={label}>
            <Link
              href={path}
              size="lg"
              className={`text-xl text-font"
                ${pathname === path
                  ? "after-content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-[2px] after:bg-secondary"
                  : ""
                }`}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
