import { CTASection } from "@/components/shared/sections/cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { H1, H4, SecondaryText, Text } from "@/components/ui/typography";
import { faqs } from "@/constants/faqs";
const Page = () => {
  return (
    <>
      <section className="relative w-full pb-16 pt-8 md:pb-24 md:pt-14">
        <div className="absolute left-[-90px] top-[26px] h-28 w-28 rounded-full bg-secondary lg:left-[-140px] lg:h-[238px] lg:w-[238px]" />
        <div className="container space-y-8 text-center">
          <div className="space-y-3 text-center">
            <H1>
              Frequently Asked <SecondaryText>Questions</SecondaryText>
            </H1>
            <Text className="mx-auto max-w-[692px]">
              Find answers to common questions about our services and company.
            </Text>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="container flex max-w-[988px] flex-col items-center gap-6 md:flex-row md:gap-[74px]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <H4>{faq.question}</H4>
                </AccordionTrigger>
                <AccordionContent>
                  <Text>{faq.answer}</Text>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Page;
