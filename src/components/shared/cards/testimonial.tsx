import { H3, H4, Text } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  occupation: string;
  review: string;
  imageUrl: string;
}

export const TestimonialCard = ({
  imageUrl,
  name,
  occupation,
  review,
}: TestimonialCardProps) => {
  return (
    <div className="relative flex select-none flex-col items-center space-y-4 rounded-3xl border border-neutral-100 p-6 pt-[68px] text-center shadow-[8px_11px_39.3px] shadow-[#4D4D4D]/10">
      <Image
        src={imageUrl}
        alt={name}
        width={96}
        height={96}
        className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-primary object-cover"
      />

      <Text className="italic">
        <q className="line-clamp-4">{review}</q>
      </Text>

      <div className="flex flex-col items-center gap-0 text-center">
        <H4>{name}</H4>
        <Text size="sm">{occupation}</Text>
      </div>
    </div>
  );
};
