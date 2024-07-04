"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Text } from "@/components/ui/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload } from "lucide-react";
import React from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string({
    required_error: "First name is required",
  }),
  lastName: z.string({
    required_error: "Last name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Must be a valid email",
    }),
  phoneNumber: z.string({
    required_error: "Phone number is required",
  }),
  positionApplied: z.string({
    required_error: "Position is required",
  }),
  message: z.string().optional(),
  file: z.custom<FileList>((value) => {
    if (!value) {
      return "Resume is required";
    }
    return true;
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export const CareerForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-2 gap-6"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-2 md:col-span-1">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your first name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-2 md:col-span-1">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your last name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your phone number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="positionApplied"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Position Applied For</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your position" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Message (optional)</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Type here.." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Attach your resume/CV</FormLabel>
              <FormControl>
                <Dropzone onDrop={field.onChange}>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="col-span-2 flex min-h-[172px] w-full flex-col items-center justify-center rounded-[16px] border border-dashed border-primary bg-primary/5 p-5"
                    >
                      <input {...getInputProps()} />
                      <CloudUpload
                        className="h-[67px] w-[67px] text-muted"
                        strokeWidth={1.5}
                      />
                      {!field.value ? (
                        <div className="space-y-2 text-center">
                          <Text className="select-none font-semibold text-muted">
                            Drag and Drop any files here
                          </Text>
                          <Text>
                            or{" "}
                            <span className="text-primary hover:underline">
                              browse files
                            </span>{" "}
                            from device
                          </Text>
                        </div>
                      ) : (
                        <Text className="text-muted">
                          {field.value?.[0]?.name}
                        </Text>
                      )}
                    </div>
                  )}
                </Dropzone>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="col-span-2 w-full">Submit</Button>
      </form>
    </Form>
  );
};
