import SignInForm from "../components/SignInForm";
import styles from "./SignIn.module.css"

const Login = () => {
    return (
        <div className={styles.container}>
            <SignInForm />
        </ div>
    );
}

export default Login;