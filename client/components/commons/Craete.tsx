import React, { useState } from "react";
import styles from "../../styles/components/commons/Create.module.scss";
import CommonMeta from "../../components/commons/CommonMeta";
import Str from "../../utils/str";
import FormInput from "./FormInput";
import Input from "./Input";
import Title from "./Title"
import axios from "axios";

type Props = {
    isBlog?: boolean,
    isWork?: boolean,
}

const Create = ({isBlog, isWork}: Props) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const article = isBlog ? "blogs" : "works";
        try {
            const token = sessionStorage.getItem("token");
            await axios.post(`${Str.apiUrl()}/admin/${article}/create`, {
                "title": title,
                "description": description,
                "contents": markdown,
            },{
                headers: {
                    Authorization: token!
                }
            });
            setMsg("作成しました。")
        } catch(e) {
            setMsg("エラーが発生しました。");
        }
    };
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [markdown, setMarkdown] = useState("");
    const [msg, setMsg] = useState("");

    return (
        <div className={Str.joinClassName(styles.create, "inner")}>
            { msg ? <p>{msg}</p> : <></> }
            <CommonMeta title={isBlog ? "ブログ作成" : isWork ? "実績作成" : ""} />
            <Title className={styles.create__title}>{isBlog ? "ブログ" : isWork ? "実績" : ""}作成</Title>
            <form className={styles.create__form} onSubmit={handleSubmit}>
                <FormInput className={styles.create__form__input} name={"Title"} type={"text"} onChange={(e) => setTitle(e.target.value)} />
                <FormInput className={styles.create__form__input} name={"Description"} type={"text"} onChange={(e) => setDescription(e.target.value)} />
                <FormInput className={styles.create__form__input} name={"Markdown"} type={"textarea"} onChange={(e) => setMarkdown(e.target.value)} />
                <Input className={styles.create__form__submit} type={"button"}>作成</Input>
            </form>
        </div>
    );
}

export default Create;