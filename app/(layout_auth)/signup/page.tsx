import AuthPageContainer from "@features/auth/components/AuthPageContainer";
import SignupForm from "@features/auth/components/SignupForm";
import SignupFormProvider from "@features/auth/components/SignupFormProvider";

export default function Signup() {
  return (
    <AuthPageContainer
      title="회원가입"
      description="이미 회원이신가요?"
      linkText="로그인"
    >
      <SignupFormProvider>
        <SignupForm />
      </SignupFormProvider>
    </AuthPageContainer>
  );
}
