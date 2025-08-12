import { emailPattern, passwordPattern } from "@constants/validationPatterns";
import * as z from "zod";

// eslint-disable-next-line import/prefer-default-export
export const signupSchema = z
  .object({
    name: z.string().nonempty("이름을 입력해주세요"),
    email: z
      .string()
      .nonempty("아이디를 입력해주세요")
      .regex(emailPattern.value, emailPattern.message),
    companyName: z.string().nonempty("직업 혹은 소속을 입력해주세요"),
    password: z
      .string()
      .nonempty("비밀번호를 입력해주세요")
      .regex(passwordPattern.value, passwordPattern.message),
    passwordConfirm: z.string().nonempty("비밀번호를 다시 한 번 입력해주세요"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"], // passwordConfirm 필드에 에러 표시
  });
