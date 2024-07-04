import { CareerForm } from "@/components/shared/forms/career-form";
import { Button } from "@/components/ui/button";
import { H1, H2, H3, SecondaryText, Text } from "@/components/ui/typography";
import { BarChartBig, BicepsFlexed, UsersRound } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="w-full py-24">
        <div className="container flex items-center justify-between">
          <div className="w-full max-w-[508px] space-y-3.5">
            <H1>
              Join Our <SecondaryText>Team</SecondaryText>
            </H1>
            <Text>
              Explore exciting career opportunities and become a part of our
              innovative and dynamic team dedicated to driving success for our
              clients.
            </Text>
            <Button className="w-[168px]">Join us</Button>
          </div>
          <div className="relative h-[354px] w-full max-w-[508px]">
            <div className="absolute -right-8 top-0 h-[17px] w-[17px] rounded-full bg-primary" />
            <div className="absolute -bottom-[57px] -right-[88px] h-[220px] w-[220px] rounded-full bg-secondary"></div>
            <Image
              src="/images/career.webp"
              alt="Career"
              fill
              className="h-full w-full rounded-3xl object-cover shadow-[25px_50px_70px_-20px] shadow-black/15"
            />
          </div>
        </div>
      </section>
      <section className="w-full pb-24 pt-14">
        <div className="container space-y-16">
          <div className="space-y-3 text-center">
            <H2>
              Why <SecondaryText>Join</SecondaryText> Us?
            </H2>
            <Text>
              Discover the top reasons why joining our team can be the best
              decision for your career.
            </Text>
          </div>

          <div className="flex w-full justify-between gap-10">
            <div className="flex w-full max-w-[352px] flex-col items-center gap-4 text-center">
              <div className="flex aspect-square h-[72px] w-[72px] items-center justify-center rounded-full bg-primary/20">
                <BarChartBig className="h-[30px] w-[30px] text-primary" />
              </div>
              <div className="w-full space-y-3 text-center">
                <H3>Professional Growth</H3>
                <Text>
                  Access to ongoing learning and development opportunities for
                  personal and professional growth.
                </Text>
              </div>
            </div>
            <div className="flex w-full max-w-[352px] flex-col items-center gap-4 text-center">
              <div className="flex aspect-square h-[72px] w-[72px] items-center justify-center rounded-full bg-secondary/20">
                <UsersRound className="h-[30px] w-[30px] text-secondary" />
              </div>
              <div className="w-full space-y-3 text-center">
                <H3>Collaborative Environment</H3>
                <Text>
                  Culture of collaboration and teamwork, with valued ideas and
                  diverse talent.
                </Text>
              </div>
            </div>
            <div className="flex w-full max-w-[352px] flex-col items-center gap-4 text-center">
              <div className="flex aspect-square h-[72px] w-[72px] items-center justify-center rounded-full bg-[#9747FF]/20">
                <BicepsFlexed className="h-[30px] w-[30px] text-[#9747FF]" />
              </div>
              <div className="w-full space-y-3 text-center">
                <H3>Impactful Work</H3>
                <Text>
                  Opportunity to tackle exciting challenges and contribute to
                  meaningful projects.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-24">
        <div className="container max-w-[988px] space-y-16">
          <div className="mx-auto max-w-[780px] space-y-3 text-center">
            <H2>
              <SecondaryText>Apply</SecondaryText> Now!
            </H2>
            <Text>
              Explore exciting career opportunities and become a part of our
              innovative and dynamic team dedicated to driving success for our
              clients.
            </Text>
          </div>
          <CareerForm />
        </div>
      </section>
    </>
  );
};

export default Page;
