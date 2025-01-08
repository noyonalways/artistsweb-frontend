"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import { useUser } from "@/context/user-context";
import { loginSchema } from "@/schemas/auth";
import { login } from "@/service/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "sonner";
import { z } from "zod";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { checkUser } = useUser();
  const redirectUrl = searchParams.get("redirect") || "/admin/dashboard";
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      setLoading(true);
      const res = await login(data);

      if (!res?.success) {
        toast.error(res?.message);
        return;
      }

      await checkUser();
      toast.success(res?.message);
      router.push(redirectUrl);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-foreground h-svh w-full flex lg:items-center justify-center">
      <div className="w-full lg:max-w-md px-6 mt-32 lg:mt-0">
        <div className="lg:bg-white/10 backdrop-blur-lg rounded-2xl lg:p-8 shadow-xl relative">
          <Link
            href="/"
            className="absolute top-4 left-4 bg-gray-500 p-2 rounded-full text-white/70 hover:text-white transition-colors"
            title="Back to Home"
          >
            <BiLeftArrowAlt size={20} />
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-300">Please sign in to continue</p>
          </div>

          <Form onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
            <div className="space-y-6">
              <div>
                <Input
                  className="w-full text-white px-3 py-2 rounded-md bg-white/10"
                  name="email"
                  placeholder="Email address"
                />
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <Input
                    className="w-full text-white px-3 py-2 rounded-md bg-white/10 pr-10"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <div className="absolute top-3 right-0 flex items-center pr-3">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-white/70 hover:text-white z-10"
                    >
                      {showPassword ? (
                        <IoEyeOffOutline size={20} />
                      ) : (
                        <IoEyeOutline size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="w-full bg-primary hover:bg-primary/90 transition-colors text-white font-semibold py-3 px-4  rounded-lg"
                type="submit"
              >
                {loading ? (
                  <CgSpinner size={24} className="animate-spin mx-auto " />
                ) : (
                  <span>Login</span>
                )}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

const LoginPage = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
