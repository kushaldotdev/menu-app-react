import api from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function ContactForm() {
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(30, { message: "Name must not exceed 30 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters." })
      .max(200, { message: "Message must not exceed 200 characters." }),
  });

  // Initialize form with react-hook-form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
  });

  // Destructure form methods and state
  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
    setError,
  } = form;

  const onSubmit = async (data) => {
    try {
      const feedback = await api.post("/feedback", data);
      reset();
      toast.success("Feedback has been received!", {
        description: "Thank you for writing to us.",
      });
    } catch (error) {
      setError("root", {
        type: "server",
        message: error.message || "Failed to send message. Please try again.",
      });

      toast.error("Message not sent!", {
        description: error.response?.data?.message,
      });

      // setError("serverErrorMessage", {
      //   type: "manual",
      //   message: error.response?.data?.message || "",
      // });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={4} className="resize-none" placeholder="Write your message here..." disabled={isSubmitting} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {errors.root && <div className="text-sm font-medium text-destructive text-center">{errors.root.message}</div>}

        <Button type="submit" variant="default" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
