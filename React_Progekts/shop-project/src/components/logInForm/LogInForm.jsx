import { useForm, SubmitHandler } from "react-hook-form";
import './loginForm.css'

export default function LogInForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="formWrap">
      <form className="logInForm"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <label htmlFor="userName">User Name</label>
        <input
          className="userInput"
          {...register("userName", {
            required: "This field is required",
            minLength: {
              value: 4,
              message: "User Name must be at least 4 characters long",
            },
            pattern: {
              value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm,
              message: "Invalid user name format",
            },
          })}
          type="text"
        />
        {errors.userName && <p>{errors.userName.message}</p>}
        <label htmlFor="email">Email</label>
        <input
          className="userInput"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Invalid email format",
            },
          })}
          type="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
