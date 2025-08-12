import AuthPageContainer from "@features/auth/components/AuthPageContainer";
import SigninForm from "@features/auth/components/SigninForm";
import SigninFormProvider from "@features/auth/components/SigninFormProvider";

export default function Signin() {
  return (
    <AuthPageContainer
      title="로그인"
      description="에버링이 처음이신가요?"
      linkText="회원가입"
    >
      <SigninFormProvider>
        <SigninForm />
      </SigninFormProvider>
    </AuthPageContainer>
  );
}
