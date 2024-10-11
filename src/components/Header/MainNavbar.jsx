"use client";
import React from "react";

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "../Navbar";

export default function MainNavbar() {
  return (
    <Navbar height={"46px"} maxWidth="full" isBordered className="">
      <NavbarBrand>
        <div className="flex gap-3 items-center">
          <p className="text-gray-110 text-3xl font-bold">kishore</p>
        </div>
      </NavbarBrand>
      <NavbarContent className="flex gap-5 text-15 font-semibold" justify="end">
        <NavbarItem>
          <Link href="#">
            <div className="flex items-center gap-2">Home</div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">My Project</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">About Me</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Resume</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Content</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
