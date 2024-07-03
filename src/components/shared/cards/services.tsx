import { H3, Text } from "@/components/ui/typography";
import { Server } from "lucide-react";

export const ServicesCard = () => {
  return (
    <div className="relative flex min-h-[226px] w-full flex-col gap-4 rounded-2xl border border-black/50 p-6 pt-14">
      <div className="absolute left-6 top-0 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-primary">
        <Server size={24} color="white" />
      </div>
      <H3>IT Consulting</H3>
      <Text className="text-sm">
        Expert advice and strategic guidance to enhance your IT infrastructure
        and drive business growth.
      </Text>
    </div>
  );
};
