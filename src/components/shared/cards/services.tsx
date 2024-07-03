import { H3, Text } from "@/components/ui/typography";
import { Server } from "lucide-react";

export const ServicesCard = () => {
  return (
    <div className='w-full min-h-[226px] relative pt-14 p-6 border border-black/50 rounded-2xl flex flex-col gap-4'>
      <div className='absolute top-0 left-6 -translate-y-1/2 bg-primary w-[60px] h-[60px] rounded-full flex items-center justify-center '>
        <Server size={24} color='white' />
      </div>
      <H3>IT Consulting</H3>
      <Text className='text-sm'>
        Expert advice and strategic guidance to enhance your IT infrastructure
        and drive business growth.
      </Text>
    </div>
  );
};
