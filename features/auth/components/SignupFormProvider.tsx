"use client";

import { signupSchema } from "@features/auth/schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function SignupFormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const methods = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
