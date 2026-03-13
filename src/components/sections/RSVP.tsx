
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  attendance: z.enum(["yes", "no"], { required_error: "Please select your attendance." }),
  guests: z.string().optional(),
});

export const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      attendance: "yes",
      guests: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitted(true);
    toast({
      title: "RSVP Received",
      description: "Thank you for confirming your attendance!",
    });
  }

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 bg-card/40 border-y border-accent/10">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="bg-accent/10 p-12 rounded-2xl border border-accent/20">
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-headline text-3xl gold-text-gradient mb-4">Horas!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for your RSVP. We are excited to see you on our special day!
            </p>
            <Button 
              variant="outline" 
              className="border-accent text-accent"
              onClick={() => setSubmitted(false)}
            >
              Update RSVP
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-card/40 border-y border-accent/10">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl gold-text-gradient mb-4">RSVP</h2>
          <p className="text-muted-foreground">Kindly confirm your presence by October 10th, 2025.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-card p-8 rounded-xl border border-accent/10 shadow-2xl">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-accent">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" className="bg-background border-accent/20 focus:border-accent" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-accent">Will you attend?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-8"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" className="border-accent text-accent" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes, I'll be there</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" className="border-accent text-accent" />
                        </FormControl>
                        <FormLabel className="font-normal">Sorry, I can't come</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-accent">Number of Guests</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background border-accent/20">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-card border-accent/20">
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 Persons</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold py-6">
              Confirm Attendance
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
