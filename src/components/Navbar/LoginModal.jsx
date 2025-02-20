import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";

// Reusable Form Components
const EmailField = ({ control, disabled }) => (
  <FormField
    name="email"
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Your email" autoComplete="email" disabled={disabled} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const PasswordField = ({ control, name, label, placeholder, autoComplete, disabled }) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type="password" placeholder={placeholder} autoComplete={autoComplete} disabled={disabled} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const RootError = ({ error }) => error && <div className="text-sm font-medium text-destructive text-center">{error.message}</div>;

const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const {
    formState: { isSubmitting, errors: loginErrors },
    handleSubmit: handleLoginSubmit,
    setError: setLoginError,
    reset: resetLogin,
  } = loginForm;

  const onLoginSubmit = useCallback(
    async (data) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        throw new Error("Invalid credentials");
      } catch (error) {
        setLoginError("root", {
          type: "manual",
          message: error.message || "Login failed. Please try again.",
        });
      }
    },
    [setLoginError]
  );

  return (
    <Form {...loginForm}>
      <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="space-y-6">
        <EmailField control={loginForm.control} disabled={isSubmitting} />

        <PasswordField
          control={loginForm.control}
          name="password"
          label="Password"
          placeholder="Your password"
          autoComplete="current-password"
          disabled={isSubmitting}
        />

        <RootError error={loginErrors.root} />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
};

const RegisterForm = () => {
  const registerSchema = z
    .object({
      email: z.string().nonempty("Email is required").email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
    mode: "onTouched",
  });

  const {
    formState: { isSubmitting: isRegisterSubmitting, errors: registerErrors },
    handleSubmit: handleRegisterSubmit,
    setError: setRegisterError,
    reset: resetRegister,
  } = registerForm;

  const onRegisterSubmit = useCallback(
    async (data) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        throw new Error("Registration failed");
      } catch (error) {
        setRegisterError("root", {
          type: "manual",
          message: error.message || "Registration failed. Please try again.",
        });
      }
    },
    [setRegisterError]
  );

  return (
    <Form {...registerForm}>
      <form onSubmit={handleRegisterSubmit(onRegisterSubmit)} className="space-y-6">
        <EmailField control={registerForm.control} disabled={isRegisterSubmitting} />

        <PasswordField
          control={registerForm.control}
          name="password"
          label="Password"
          placeholder="Your password"
          autoComplete="new-password"
          disabled={isRegisterSubmitting}
        />

        <PasswordField
          control={registerForm.control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          autoComplete="new-password"
          disabled={isRegisterSubmitting}
        />

        <RootError error={registerErrors.root} />

        <Button type="submit" className="w-full" disabled={isRegisterSubmitting}>
          {isRegisterSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Registering...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default function LoginModal({ isModalOpen, closeModal }) {
  // Reset forms when modal opens
  // useEffect(() => {
  //   if (isModalOpen) {
  //     resetLogin();
  //     resetRegister();
  //   }
  // }, [isModalOpen, resetLogin, resetRegister]);

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-md overflow-auto max-h-[calc(100vh-145px)] md:max-h-[calc(100vh-70px)]">
        <DialogHeader>
          <DialogTitle className="mb-4">Login / Sign Up</DialogTitle>
          <DialogDescription className="sr-only">Authentication Modal</DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue="login"
          onValueChange={() => {
            // resetLogin();
            // resetRegister();
          }}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <LoginForm />
          </TabsContent>

          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
