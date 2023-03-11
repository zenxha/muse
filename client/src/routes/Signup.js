import SignUpForm from "../components/SignUpForm";
import styles from "./SignIn.module.css"

const SignUp = () => {
    return (
        <div className={styles.container}>
            <SignUpForm />
        </ div>
    );
}

export default SignUp;