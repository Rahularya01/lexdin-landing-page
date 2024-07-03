import React from "react";
import { PageLayout } from "./page-layout";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { navLinks } from "@/constants/nav";

export const Header = () => {
  return (
    <header className='w-full sticky top-0 left-0 py-2.5 z-40 bg-white'>
      <PageLayout className='flex items-center justify-between w-full'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Vibe IT Solutions'
            width={70}
            height={70}
          />
        </Link>

        <nav className='flex items-center gap-10'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-base text-black/50 font-medium hover:text-black/80 transition-colors'
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link
          href='/contact'
          className={buttonVariants({ size: "default", variant: "default" })}
        >
          Contact us
        </Link>
      </PageLayout>
    </header>
  );
};
