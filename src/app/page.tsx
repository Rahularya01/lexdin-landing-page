import { Testimonials } from "@/components/pages/testimonials";
import { ServicesCard } from "@/components/shared/cards/services";
import { SectionHeading } from "@/components/shared/heading";
import { CTASection } from "@/components/shared/sections/cta";
import { buttonVariants } from "@/components/ui/button";
import { H1, H2, H3, SecondaryText, Text } from "@/components/ui/typography";
import { stats } from "@/constants/stats";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full py-16 md:py-[72px]">
        <div className="container flex flex-col items-center justify-between gap-[72px] lg:flex-row">
          <div className="w-full space-y-4 md:space-y-[22px]">
            <H1>
              Empowering Business with{" "}
              <SecondaryText>IT Solutions</SecondaryText>
            </H1>
            <Text>
              Our expert IT consulting services empower businesses to harness
              the latest technologies, streamline operations, and achieve their
              goals efficiently and effectively.
            </Text>

            <Link
              href="/about"
              className={buttonVariants({
                variant: "default",
                className: "w-[208px]",
                size: "lg",
              })}
            >
              Learn More
            </Link>

            <div className="flex items-center justify-center gap-3 pt-6 md:gap-[31px] lg:items-start lg:justify-start">
              {stats.map((stat, index) => (
                <div
                  key={stat.name}
                  className={cn(
                    "flex flex-col items-center gap-2.5 text-center",
                    {
                      "border-x border-primary px-3 md:px-[26px]": index === 1,
                    },
                  )}
                >
                  <H3 className="text-primary">{stat.value}</H3>
                  <Text className="text-sm">{stat.name}</Text>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square w-full flex-shrink-0 md:h-[400px] md:w-[400px] xl:h-[500px] xl:w-[500px]">
            <div className="absolute -bottom-[22px] left-5 h-[120px] w-[120px] rounded-full bg-primary md:h-[167px] md:w-[167px]"></div>
            <div className="absolute bottom-[90px] right-0 h-[46px] w-[46px] rounded-full bg-secondary"></div>
            <div className="absolute right-[46px] top-2.5 h-[31px] w-[31px] rounded-full bg-secondary"></div>
            <div className="absolute left-[30px] top-[63px] h-[18px] w-[18px] rounded-full bg-secondary"></div>
            <div className="absolute -bottom-[23px] right-[171px] h-[18px] w-[18px] rounded-full bg-secondary"></div>

            <Image
              src={"/images/hero.webp"}
              alt="Hero Image"
              width={500}
              height={500}
              className="h-full w-full rounded-full border-[4px] border-primary object-cover shadow-[25px_50px_70px_-20px] shadow-black/15"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="absolute left-[-100px] top-[-90px] hidden h-32 w-32 rounded-full bg-secondary lg:left-[-170px] lg:block lg:h-[296px] lg:w-[296px]" />
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

      <section className="relative w-full pb-16 pt-8 md:pb-24 md:pt-14">
        <div className="absolute right-[-100px] top-[-90px] h-32 w-32 rounded-full bg-primary lg:right-[-172px] lg:h-[296px] lg:w-[296px]" />

        <div className="container flex flex-col items-center gap-12 md:gap-[72px] lg:flex-row">
          <Image
            src="/images/why_choose_us.png"
            alt="Why Choose Us"
            width={500}
            height={500}
            className="aspect-square w-full object-cover md:h-[500px] md:w-[500px] lg:flex-shrink-0"
          />
          <div className="relative space-y-[22px]">
            <div className="absolute -left-6 -top-3.5 h-5 w-5 rounded-full bg-secondary" />
            <div className="absolute -top-2 right-0 h-5 w-5 rounded-full bg-secondary" />

            <H2>Why Choose Us?</H2>
            <Text>
              Our expert IT consulting services empower businesses to harness
              the latest technologies, streamline operations, and achieve their
              goals efficiently and effectively.
            </Text>
            <ul className="list-disc pl-6">
              <li>
                <Text>
                  Skilled team, experienced in IT consulting and development.
                </Text>
              </li>
              <li>
                <Text>
                  Tailored services for your unique needs, ensuring results.
                </Text>
              </li>
              <li>
                <Text>
                  Proven track record of successful projects and outcomes.
                </Text>
              </li>
              <li>
                <Text>
                  Customer-focused approach for exceptional service and
                  satisfaction.
                </Text>
              </li>
            </ul>
            <Link
              href="/about"
              className={buttonVariants({ className: "w-[154px]" })}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full pb-16 pt-8 md:pb-24 md:pt-[46px]">
        <div className="absolute left-[-178px] top-[-63px] hidden h-[266px] w-[266px] rounded-full bg-secondary lg:block" />
        <div className="absolute bottom-[-73px] right-[-90px] h-28 w-28 rounded-full bg-primary lg:right-[-150px] lg:h-[231px] lg:w-[231px]" />

        <div className="container space-y-4">
          <SectionHeading
            className="max-w-[780px]"
            title="What Our Customers Says About Us"
            description="Explore our comprehensive range of IT solutions designed to drive innovation, enhance efficiency, and accelerate your business growth."
          />

          <Testimonials />
        </div>
      </section>

      <CTASection />
    </>
  );
}
