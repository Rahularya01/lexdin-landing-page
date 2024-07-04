import { ContactForm } from "@/components/shared/forms/contact-form";
import { H2, SecondaryText, Text } from "@/components/ui/typography";
import { info, socialMedia } from "@/constants/info";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="w-full py-24">
        <div className="container flex items-end justify-between gap-[60px]">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4310995252667!2d76.68200921129731!3d30.70627887449115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef378338c3cd%3A0xa54cc7cd6806cc17!2sVibe%20Internet%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1720077126563!5m2!1sen!2sin"
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
                    <Text className="text-sm text-muted">
                      {item.description}
                    </Text>
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
