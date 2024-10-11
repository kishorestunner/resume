"use client"
import {
    Navbar as NextUINavbar,
    NavbarBrand as NextUINavbarBrand,
    NavbarContent as NextUINavbarContent,
    NavbarItem as NextUINavbarItem,
  } from "@nextui-org/navbar";
  
  import { extendVariants } from "@nextui-org/system";
  
  export const Navbar = extendVariants(NextUINavbar, {
    variants: {
      kishore: {
        true: {
          brand: "",
          content: "",
          base: "px-5 py-4",
          item: "p-3 text-gray-100 hover:bg-primary hover:text-white hover:p-3 rounded-md",
        },
      },
    },
    defaultVariants: {
      kishore: true,
    },
  });
  export const NavbarBrand = NextUINavbarBrand;
  export const NavbarContent = NextUINavbarContent;
  export const NavbarItem = NextUINavbarItem;
  