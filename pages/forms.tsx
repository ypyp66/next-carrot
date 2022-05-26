import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onBlur",
  });

  const onValid = (data: LoginForm) => {
    console.log("onValid", data);
  };

  const onInvalid = (errror: FieldErrors) => {
    console.log(errror);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        style={{
          display: "none",
        }}
        autoComplete="false"
      />
      <input
        {...register("username", {
          required: "이름은 필수항목입니다.",
          minLength: {
            message: "이름은 5자 이상이어야 합니다",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "이메일은 필수항목입니다.",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "gmail은 허용안됨", //message를 return
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "비밀번호는 필수항목입니다." })}
        type="password"
        placeholder="Password"
      />
      <input {...register} type="submit" value="Create Account" />
    </form>
  );
}

export default Forms;
