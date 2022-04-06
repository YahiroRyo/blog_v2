import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/pages/admin/Login.module.scss";
import FormInput from "../../components/commons/FormInput";
import Input from "../../components/commons/Input";
import Str from "../../utils/str";
import CommonMeta from "../../components/commons/CommonMeta";
import Title from "../../components/commons/Title";
import axios from "axios";

const Login = () => {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Str.apiUrl()}/admin/login`, {
                user_name: name,
                password: password
            });
            sessionStorage.setItem("token", response.data.token);
            router.replace("/admin");
            
        } catch(e) {
            setMsg("ログインに失敗しました。");
        }
    }
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    
    return (
        <>
            {msg}
            <CommonMeta title="ログイン" />
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