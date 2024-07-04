import { ServicesCard } from "@/components/shared/cards/services";
import { SectionHeading } from "@/components/shared/heading";
import { H1, SecondaryText, Text } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="w-full pb-24 pt-14">
        <div className="container space-y-8 text-center">
          <div className="space-y-3 text-center">
            <H1>
              Discover Our <SecondaryText>Comprehensive</SecondaryText> IT
              Services
            </H1>
            <Text className="mx-auto max-w-[692px]">
              Explore our wide range of services designed to enhance your
              business performance, security, and growth.
            </Text>
          </div>

          <Image
            src="/images/services.png"
            alt="Services"
            width={1152}
            height={477}
            className="aspect-square w-full rounded-3xl object-cover md:aspect-[1152/447]"
          />
        </div>
      </section>

      <section className="w-full pb-24">
        <div className="container space-y-[80px]">
          <SectionHeading
            className="max-w-[780px]"
            title="Our Services"
            description="Explore our comprehensive range of IT solutions designed to drive innovation, enhance efficiency, and accelerate your business growth."
          />

          <div className="grid grid-cols-1 gap-x-10 gap-y-[61px] md:grid-cols-2 lg:grid-cols-3">
            {new Array(6).fill(0).map((_, index) => (
              <ServicesCard key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
