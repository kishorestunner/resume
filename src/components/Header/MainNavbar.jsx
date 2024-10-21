"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "../NavBar";
import MenuBar from "../Icons/MenuBar";

export default function MainNavbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar height={"46px"} maxWidth="full" isBordered className="bg-primary-400">
      <NavbarBrand>
        <div className="flex gap-3 items-center">
          <p className="text-white text-3xl font-bold">kishore</p>
        </div>
      </NavbarBrand>
      
      {/* Desktop menu */}
      <NavbarContent className="hidden lg:flex gap-5 text-15 text-gray-0 font-semibold" justify="end">
        <NavbarItem>
          <Link href="#home" className="text-white hover:text-blue-500  transition-colors duration-300">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects" className="text-white hover:text-blue-500  transition-colors duration-300">
            My Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#about" className="text-white hover:text-blue-500  transition-colors duration-300">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#resume" className="text-white hover:text-blue-500  transition-colors duration-300">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contact" className="text-white hover:text-blue-500  transition-colors duration-300">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu button */}
      <button
        className="lg:hidden text-2xl p-2 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <MenuBar className="w-6 h-6" />
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col gap-5 absolute top-16 bg-white w-full p-5 shadow-md z-10 right-0">
          <NavbarItem>
            <Link href="#home" className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 hover:underline transition-colors duration-300">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#projects" className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 hover:underline transition-colors duration-300">
              My Project
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#about" className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 hover:underline transition-colors duration-300">
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#resume" className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 hover:underline transition-colors duration-300">
              Resume
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#contact" className="text-lg md:text-xl lg:text-2xl hover:text-blue-500 hover:underline transition-colors duration-300">
              Contact
            </Link>
          </NavbarItem>
        </div>
      )}
    </Navbar>
  );
}
