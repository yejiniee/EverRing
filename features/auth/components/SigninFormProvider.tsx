"use client";

import { signinSchema } from "@features/auth/schemas/signinSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function SigninFormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const methods = useForm({
    resolver: zodResolver(signinSchema),
    mode: "onBlur",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
