import { ContactForm } from "@/components/shared/forms/contact-form";
import { H2, SecondaryText, Text } from "@/components/ui/typography";
import { info, socialMedia } from "@/constants/info";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="w-full py-16 md:py-24">
        <div className="container flex flex-col items-end justify-between gap-[60px] lg:flex-row">
          <div className="w-full space-y-8">
            <div className="space-y-2">
              <H2>
                Get In <SecondaryText>Touch</SecondaryText>
              </H2>
              <Text>
                We&apos;re here to help with any questions or concerns.
              </Text>
            </div>

            <ContactForm />
          </div>

          <div className="basis-[65%] space-y-[50px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.563768603084!2d77.2928167!3d28.432417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdde47d61ab55%3A0x6db6431ca91aa15b!2sMahesh%20Apartments%2C%20GH18%2C%20Part%203%2C%20Sector%2021C%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1720112922107!5m2!1sen!2sin"
              className="h-[277px] w-full max-w-[415px] rounded-lg"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <ul className="space-y-6">
              {info.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="h-5 w-5 text-muted">{item.icon}</span>

                  <div>
                    <h4 className="text-base font-semibold leading-[1.4] text-muted">
                      {item.title}
                    </h4>
                    <Link href={item.href} className="text-sm text-muted">
                      {item.description}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <Text className="font-semibold text-muted" size="sm">
                Follow us
              </Text>

              <ul className="flex gap-4">
                {socialMedia.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="h-5 w-5 text-muted">
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
