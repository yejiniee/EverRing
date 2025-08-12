"use client";

import { useFormContext } from "react-hook-form";

import Button from "@components/common/Button";
import InputForm from "@components/common/InputForm";
import { FormValues } from "@customTypes/form";
import useDebouncedValidation from "@features/auth/hooks/useDebouncedValidation";
import useSignin from "@features/auth/hooks/useSignin";
import handleSigninMutationError from "@features/auth/utils/handleMutationError";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useFormContext<FormValues>();

  useDebouncedValidation("email");

  const mutation = useSignin();

  const onSubmit = async (data: FormValues) => {
    mutation.mutate(data, {
      onError: (error) => handleSigninMutationError(error, setError),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-10"
    >
      <div className="flex w-full flex-col gap-6">
        <InputForm
          name="email"
          id="email"
          type="email"
          label="아이디"
          labelTextSize="sm"
          placeholder="아이디를 입력하세요"
          register={register}
          errors={errors}
        />
        <InputForm
          name="password"
          id="password"
          label="비밀번호"
          labelTextSize="sm"
          type="password"
          placeholder="비밀번호를 입력하세요"
          register={register}
          errors={errors}
        />
      </div>
      <Button
        text="로그인"
        type="submit"
        disabled={!isValid}
        size="large"
        variant="solid"
      />
    </form>
  );
}
