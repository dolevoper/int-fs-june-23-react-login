import { PropsWithChildren } from "react";
import styles from "./LoginPage.module.scss";

export function LoginPage() {
    return (
        <form className={styles.wrapper}>
            <h1>Login</h1>
            <FormField htmlFor="username" label="Username">
                <input id="username" className={styles.input} name="username" autoFocus />
            </FormField>
            <FormField htmlFor="password" label="Password">
                <input type="password" className={styles.input} id="possword" name="password"/>
            </FormField>
            <button className={styles.primaryButton}>Login</button>
        </form>
    )
}

type FormFieldProps = {
    label: string;
    htmlFor: string;
}

function FormField({ label, htmlFor, children }: PropsWithChildren<FormFieldProps>) {
    return (
        <div className={styles.formField}>
            <label htmlFor={htmlFor}>{label}</label>
            {children}
        </div>
    )
}