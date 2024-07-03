import React from "react";
import { PageLayout } from "./page-layout";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { navLinks } from "@/constants/nav";

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-40 w-full bg-white py-2.5">
      <PageLayout className="flex w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Vibe IT Solutions"
            width={70}
            height={70}
          />
        </Link>

        <nav className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-black/50 transition-colors hover:text-black/80"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={buttonVariants({ size: "default", variant: "default" })}
        >
          Contact us
        </Link>
      </PageLayout>
    </header>
  );
};
