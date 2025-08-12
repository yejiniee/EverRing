import { emailPattern } from "@constants/validationPatterns";
import * as z from "zod";

// eslint-disable-next-line import/prefer-default-export
export const signinSchema = z.object({
  email: z
    .string()
    .nonempty("아이디를 입력해주세요")
    .regex(emailPattern.value, emailPattern.message),
  password: z.string().nonempty("비밀번호를 입력해주세요"),
});
