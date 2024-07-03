import React from "react";
import { PageLayout } from "./page-layout";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const Header = () => {
  return (
    <header className='w-full sticky top-0 left-0 py-2.5'>
      <PageLayout className='flex items-center justify-between w-full'>
        <Image src='/logo.svg' alt='Vibe IT Solutions' width={70} height={70} />

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
