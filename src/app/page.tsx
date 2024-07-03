import { ServicesCard } from "@/components/shared/cards/services";
import { SectionHeading } from "@/components/shared/heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { H1, H3, SecondaryText, Text } from "@/components/ui/typography";
import { stats } from "@/constants/stats";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className='w-full py-[72px]'>
        <div className='container flex items-center justify-between gap-[72px]'>
          <div className='space-y-[22px] w-full'>
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
              href='/about'
              className={buttonVariants({
                variant: "default",
                className: "w-[208px]",
                size: "lg",
              })}
            >
              Learn More
            </Link>

            <div className='flex pt-6 items-center gap-[31px]'>
              {stats.map((stat, index) => (
                <div
                  key={stat.name}
                  className={cn(
                    "flex flex-col text-center items-center gap-2.5",
                    {
                      "px-[26px] border-x border-primary": index === 1,
                    }
                  )}
                >
                  <H3>{stat.value}</H3>
                  <Text className='text-sm'>{stat.name}</Text>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[500px] h-[500px] flex-shrink-0 relative'>
            <div className='absolute w-[167px] h-[167px] rounded-full bg-primary left-5 -bottom-[22px]'></div>
            <div className='absolute w-[46px] h-[46px] rounded-full bg-secondary right-0 bottom-[90px]'></div>
            <div className='absolute w-[31px] h-[31px] rounded-full bg-secondary top-2.5 right-[46px]'></div>
            <div className='absolute w-[18px] h-[18px] rounded-full bg-secondary top-[63px] left-[30px]'></div>
            <div className='absolute w-[18px] h-[18px] rounded-full bg-secondary -bottom-[23px] right-[171px]'></div>

            <Image
              src={"/images/hero.webp"}
              alt='Hero Image'
              width={500}
              height={500}
              className='w-full h-full object-cover rounded-full border-[4px] border-primary shadow-[25px_50px_70px_-20px] shadow-black/15'
            />
          </div>
        </div>
      </section>

      <section className='w-full py-24'>
        <div className='container space-y-[80px]'>
          <SectionHeading
            className='max-w-[780px]'
            title='Our Services'
            description='Explore our comprehensive range of IT solutions designed to drive innovation, enhance efficiency, and accelerate your business growth.'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[61px]'>
            {new Array(6).fill(0).map((_, index) => (
              <ServicesCard key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
