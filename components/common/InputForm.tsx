import Input from "@components/common/Input";
import { InputFormProps } from "@customTypes/form";

export default function InputForm({
  name,
  register,
  errors,
  ...props
}: InputFormProps) {
  const errorMessage = errors?.[name]?.message || "";
  const isInvalid = !!errors?.[name];

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <Input
        name={name}
        isInvalid={isInvalid}
        {...(register && register(name))}
        {...props}
      />
      {isInvalid && (
        <p className="text-sm font-semibold text-red">{errorMessage}</p>
      )}
    </div>
  );
}
