"use client";
import Phone from "../../public/assets/phone.svg";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  emailAddress: z.string().email({
    message: "Please enter your email address",
  }),
  services: z.enum(["Teeth Whitening", "Dentures", "Implants", "Root Canal"]),
  department: z
    .enum([
      "Pedodonist",
      "Orthodontist",
      "Periodonist",
      "Endodontist",
      "Oral Pathologist",
      "Prosthodontist",
    ])
    .optional(),
  message: z
    .string()
    .min(5, {
      message: "Message must be at least 5 characters",
    })
    .max(200, {
      message: "Message must not be longer than 200 characters",
    }),
});

export default function Appointment() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 "
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="emailAddress"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email address" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="services"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Services</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValues={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Teeth Whitening">
                      Teeth Whitening
                    </SelectItem>
                    <SelectItem value="Dentures">Dentures</SelectItem>
                    <SelectItem value="Implants">Implants</SelectItem>
                    <SelectItem value="Root Canal">Root Canal</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="department"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Pedodonist">Pedodonist</SelectItem>
                    <SelectItem value="Orthodontist">Orthodontist</SelectItem>
                    <SelectItem value="Periodonist">Periodonist</SelectItem>
                    <SelectItem value="Endodontist">Endodontist</SelectItem>
                    <SelectItem value="Oral Pathologist">
                      Oral Pathologist
                    </SelectItem>
                    <SelectItem value="Prosthodontist">
                      Prosthodontist
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="lg:col-span-2">
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      className="min-h-36 resize-none "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="flex flex-col justify-between gap-12 lg:col-span-2 lg:flex-row-reverse lg:items-center lg:gap-20 ">
          <Button
            type="submit"
            className="h-12 w-full rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#3e2c85] hover:text-white lg:h-[64px] "
          >
            Book appointment
          </Button>
          <div className="flex w-full items-center gap-8 lg:h-[64px] ">
            <Image src={Phone} width={64} height={64} alt="phone image" />
            <div>
              <p className="mb-1 text-xs font-bold uppercase text-[#583FBC]">
                Dental 24H Emergency
              </p>
              <p className="font-bold ">03 482 394 123</p>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
