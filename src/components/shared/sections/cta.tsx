import { buttonVariants } from "@/components/ui/button";
import { H2, Text } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CTASection = () => {
  return (
    <section className="w-full pb-14 pt-4">
      <div className="container flex items-center gap-20">
        <div className="w-full flex-1 space-y-4">
          <div className="space-y-3">
            <H2>Ready to Transform Your Business?</H2>
            <Text>
              Get in touch with us to learn more about our company and how we
              can work together to achieve success.
            </Text>
          </div>
          <Link href="/contact" className={buttonVariants()}>
            Contact us
          </Link>
        </div>

        <Image
          src="/images/cta_img.png"
          alt="CTA Section"
          width={457}
          height={341}
          className="w-full max-w-[420px]"
        />
      </div>
    </section>
  );
};
