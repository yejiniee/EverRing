"use client";

import AlertModal from "@components/common/AlertModal";
import Button from "@components/common/Button";
import InputForm from "@components/common/InputForm";
import ModalPortal from "@components/common/ModalPortal";
import { FormValues } from "@customTypes/form";
import useDebouncedValidation from "@features/auth/hooks/useDebouncedValidation";
import useSignup from "@features/auth/hooks/useSignup";
import handleAuthMutationError from "@features/auth/utils/handleMutationError";
import useModalStore from "@stores/modalStore";
import { useFormContext } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useFormContext<FormValues>();

  useDebouncedValidation("email");
  useDebouncedValidation("password");
  useDebouncedValidation("passwordConfirm");

  const mutation = useSignup();

  const onSubmit = async (data: FormValues) => {
    const { passwordConfirm, ...formData } = data;

    mutation.mutate(formData, {
      onError: (error) => {
        handleAuthMutationError(error, setError);
      },
    });
  };

  const { isOpen, modalOptions, closeModal, confirmAction } = useModalStore();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <div className="flex w-full flex-col gap-6">
          <InputForm
            name="name"
            id="name"
            type="text"
            label="이름"
            labelTextSize="sm"
            placeholder="이름을 입력해주세요"
            register={register}
            errors={errors}
          />
          <InputForm
            name="email"
            id="email"
            type="email"
            label="아이디"
            labelTextSize="sm"
            placeholder="아이디를 입력해주세요"
            register={register}
            errors={errors}
          />
          <InputForm
            name="companyName"
            id="companyName"
            type="text"
            label="직업 / 소속"
            labelTextSize="sm"
            placeholder="직업 혹은 소속을 입력해주세요"
            register={register}
            errors={errors}
          />
          <InputForm
            name="password"
            id="password"
            label="비밀번호"
            labelTextSize="sm"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            register={register}
            errors={errors}
          />
          <InputForm
            name="passwordConfirm"
            id="passwordConfirm"
            label="비밀번호 확인"
            labelTextSize="sm"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            register={register}
            errors={errors}
          />
        </div>
        <Button
          text="회원가입"
          type="submit"
          disabled={!isValid}
          size="large"
          variant="solid"
        />
      </form>
      <ModalPortal>
        <AlertModal
          isOpen={isOpen}
          text={modalOptions?.text || ""}
          hasTwoButton={modalOptions?.hasTwoButton}
          onClose={closeModal}
          onConfirm={confirmAction}
        />
      </ModalPortal>
    </>
  );
}
