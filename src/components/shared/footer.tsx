import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Text } from "../ui/typography";
import { footerLinks } from "@/constants/footer";
import { socialMedia } from "@/constants/info";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary py-8">
      <div className="container flex flex-col justify-between gap-14 px-8 pb-10 pt-6 md:flex-row lg:gap-[84px]">
        <div className="space-y-4">
          <Link href="/" className="w-fit">
            <Image
              src="/logo_dark.svg"
              alt="Logo"
              width={100}
              height={100}
              className="aspect-square w-full max-w-[100px]"
            />
          </Link>
          <Text size="sm" className="font-normal text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
            cupiditate quae nam molestias.
          </Text>
        </div>

        <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3 lg:gap-[70px]">
          {footerLinks.map((link, index) => (
            <div key={index} className="col-span-1 space-y-5">
              <Text className="text-base font-semibold leading-[1.4] text-white">
                {link.title}
              </Text>
              <ul className="space-y-2.5">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm font-normal text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <Text className="font-semibold text-white">Follow us</Text>

          <ul className="flex gap-4">
            {socialMedia.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="h-5 w-5 text-white">
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full border-t border-neutral-100 pt-4">
        <Text className="text-center text-[12px] text-white">
          © Copyrights {new Date().getFullYear()}. All Rights Reserved
        </Text>
      </div>
    </footer>
  );
};
