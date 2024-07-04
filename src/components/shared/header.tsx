"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants/nav";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { PageLayout } from "./page-layout";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";

export const Header = () => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky left-0 top-0 z-40 w-full bg-white py-2.5 transition-shadow",
        {
          "shadow-md shadow-black/5": isScrolled,
        },
      )}
    >
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="right"
          className="flex flex-col items-center justify-center"
        >
          <div className="space-y-7">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl font-normal text-black/50 transition-colors hover:text-black/80",
                      {
                        "font-medium text-muted": pathName === link.href,
                      },
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-normal text-black/50 transition-colors hover:text-black/80",
                    {
                      "font-medium text-muted": pathName === "/contact",
                    },
                  )}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
      <PageLayout className="flex w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Vibe IT Solutions"
            width={70}
            height={70}
            className="w-14 md:w-[70px]"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-base font-normal text-black/50 transition-colors hover:text-black/80",
                {
                  "font-medium text-muted": pathName === link.href,
                },
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={buttonVariants({
            size: "default",
            variant: "default",
            className: "hidden lg:flex",
          })}
        >
          Contact us
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="lg:hidden"
        >
          <AlignRight className="h-7 w-7 text-muted" />
        </button>
      </PageLayout>
    </header>
  );
};
