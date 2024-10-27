import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Submitted Data: ", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">First Name: </label>
          <input
            type="text"
            id="name"
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName", {
              required: true,
              maxLength: 20,
              minLength: { value: 3, message: "Min length atleast 3" },
            })}
          />
          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            className={errors.firstName ? "input-error" : ""}
            {...register("email", {
              required: true,
              minLength: { value: 5, message: "Min length atleast 5" },
            })}
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </form>
    </>
  );
}

export default App;
