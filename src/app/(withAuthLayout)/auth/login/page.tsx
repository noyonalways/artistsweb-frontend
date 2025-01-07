"use client";

import Form from "@/components/form/form";
import Input from "@/components/form/input";
import { loginSchema } from "@/schemas/auth";
import { login } from "@/service/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { z } from "zod";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setLoading(true);
    const res = await login(data);
    if (!res?.success) {
      toast.error(res?.message);
    }
    if (res?.success) {
      toast.success(res?.message);
      // Redirect to dashboard
    }
    setLoading(false);
  };

  return (
    <section className="bg-foreground h-svh w-full flex lg:items-center justify-center">
      <div className="w-full lg:max-w-md px-6 mt-32 lg:mt-0">
        <div className="lg:bg-white/10 backdrop-blur-lg rounded-2xl lg:p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-300">Please sign in to continue</p>
          </div>

          <Form onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
            <div className="space-y-6">
              <div>
                <Input
                  className="w-full px-3 py-2 rounded-md bg-white/10"
                  name="email"
                  placeholder="Email address"
                />
              </div>

              <div>
                <Input
                  className="w-full px-3 py-2 rounded-md bg-white/10"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
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

export default LoginPage;
