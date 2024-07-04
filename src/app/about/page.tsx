import React from "react";
import { H1, H2, H3, SecondaryText, Text } from "@/components/ui/typography";
import Image from "next/image";
import { CTASection } from "@/components/shared/sections/cta";
import { SectionHeading } from "@/components/shared/heading";
import { teamMembers } from "@/constants/team";

const Page = () => {
  return (
    <>
      <section className="w-full pb-16 pt-8 md:pb-24 md:pt-14">
        <div className="container space-y-8 text-center">
          <div className="space-y-3 text-center">
            <H1>
              Get to Know More <SecondaryText>About</SecondaryText> IT Us
            </H1>
            <Text className="mx-auto max-w-[692px]">
              Learn more about our mission, values, and the dedicated team
              driving innovation and success for our clients.
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

      <section className="w-full pb-16 md:pb-24">
        <div className="container flex max-w-[988px] flex-col items-center gap-6 md:flex-row md:gap-[74px]">
          <div className="flex-1 space-y-4">
            <H2>Our Mission</H2>
            <Text>
              Our mission is to empower businesses with cutting-edge IT
              solutions that drive innovation, enhance efficiency, and foster
              growth. We strive to be a trusted partner for our clients,
              delivering customized services that address their unique
              challenges and help them achieve their goals.
            </Text>
          </div>

          <Image
            src="/images/our_mission.png"
            alt="Our Mission"
            width={441}
            height={294}
            className="w-full max-w-[441px]"
          />
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="container flex max-w-[988px] flex-col items-center gap-6 md:flex-row-reverse md:gap-[74px]">
          <div className="flex-1 space-y-4">
            <H2>Our Values</H2>
            <Text>
              We are committed to staying at the forefront of technology,
              constantly exploring new ideas and solutions to better serve our
              clients. We conduct our business with the highest ethical
              standards, ensuring transparency, honesty, and fairness in all our
              interactions. Our clients are at the heart of everything.
            </Text>
          </div>

          <Image
            src="/images/our_vales.png"
            alt="Our Values"
            width={441}
            height={294}
            className="w-full max-w-[441px]"
          />
        </div>
      </section>

      <section className="w-full pb-24">
        <div className="container max-w-[988px] space-y-16">
          <SectionHeading
            title="Meet Our Experts"
            description="Our team of dedicated professionals brings a wealth of experience and expertise to deliver exceptional IT solutions."
            className="max-w-[780px]"
          />

          <div className="w-full space-y-10 md:space-y-14">
            <div className="flex w-full flex-wrap items-center justify-between gap-10 md:flex-row md:gap-16">
              {teamMembers.slice(0, 3).map((member) => (
                <div
                  key={member.name}
                  className="flex w-full flex-col items-center gap-3 text-center md:max-w-[212px] md:gap-5"
                >
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={170}
                    height={170}
                    className="aspect-square h-24 w-24 rounded-full object-cover md:h-[170px] md:w-[170px]"
                  />

                  <div className="text-center md:space-y-2">
                    <H3>{member.name}</H3>
                    <Text size="sm">{member.title}</Text>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto flex w-full max-w-[584px] flex-col justify-between gap-10 md:flex-row md:gap-16">
              {teamMembers.slice(3, 5).map((member) => (
                <div
                  key={member.name}
                  className="flex w-full flex-col items-center gap-3 text-center md:max-w-[212px] md:gap-5"
                >
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={170}
                    height={170}
                    className="aspect-square h-24 w-24 rounded-full object-cover md:h-[170px] md:w-[170px]"
                  />

                  <div className="text-center md:space-y-2">
                    <H3>{member.name}</H3>
                    <Text size="sm">{member.title}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Page;
