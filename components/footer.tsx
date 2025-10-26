import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact us" },
];

export default function Footer() {
  return (
    <footer className="mt-10 py-10 relative bg-gray-100">
      <Image
        src="/assets/images/logo.png"
        width={200}
        height={200}
        alt="logo with text"
        className="mx-auto"
      />
      <div className="flex gap-10 lg:gap-36 items-center w-fit mx-auto mt-5">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.label} className="hover:underline underline-offset-4">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="h-px w-4/5 mx-auto bg-gray-300 mt-20"></div>
      <p className="text-center mt-10 text-[0.75rem]">Copyright © {new Date().getFullYear()} Africa Legacy Foundation Hub (AFRIDELF). All rights reserved. </p>
    </footer>
  );
}
