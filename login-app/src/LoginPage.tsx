import { PropsWithChildren } from "react";
import axios from "axios";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router";

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <form
      className={styles.wrapper}
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const username = formData.get("username");
        const password = formData.get("password");

        try {
          const res = await axios.post("http://localhost:3000/login", {
            username,
            password,
          });

          localStorage.setItem("token", res.data);

          navigate("/");
        } catch {
          console.error("oops");
        }
      }}
    >
      <h1>Login</h1>
      <FormField htmlFor="username" label="Username">
        <input
          id="username"
          className={styles.input}
          name="username"
          required
          autoFocus
        />
      </FormField>
      <FormField htmlFor="password" label="Password">
        <input
          type="password"
          className={styles.input}
          id="possword"
          name="password"
          required
        />
      </FormField>
      <button className={styles.primaryButton}>Login</button>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  htmlFor: string;
};

function FormField({
  label,
  htmlFor,
  children,
}: PropsWithChildren<FormFieldProps>) {
  return (
    <div className={styles.formField}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}
