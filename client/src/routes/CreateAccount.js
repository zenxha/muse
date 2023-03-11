import CreateAccountForm from "../components/CreateAccountForm";
import styles from "./SignIn.module.css"

const CreateAccount = () => {
    return (
        <div className={styles.container}>
            <CreateAccountForm />
        </ div>
    );
}

export default CreateAccount;