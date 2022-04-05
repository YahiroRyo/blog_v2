import { useState } from "react";
import styles from "../../styles/pages/admin/Login.module.scss";
import FormInput from "../../components/commons/FormInput";
import Input from "../../components/commons/Input";
import Str from "../../utils/str";
import Title from "../../components/commons/Title";

const Login = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <>
            <Title className={Str.joinClassName(styles.title, "inner")}>ログイン</Title>
            <form className={Str.joinClassName(styles.form, "inner")} onSubmit={handleSubmit}>
                <FormInput className={styles.form__input} onChange={(e) => setName(e.target.value)} name="Name"></FormInput>
                <FormInput className={styles.form__input} onChange={(e) => setPassword(e.target.value)} name="Password" type="password"></FormInput>
                <Input className={styles.form__submit} type="button">ログイン</Input>
            </form>
        </>
    )
}

export default Login;