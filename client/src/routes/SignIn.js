import SignInForm from "../components/SignInForm";
import styles from "./SignIn.module.css"

const SignIn = () => {
    return (
        <div className={styles.container}>
            <SignInForm />
        </ div>
    );
}

export default SignIn;