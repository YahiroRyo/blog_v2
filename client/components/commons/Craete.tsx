import React, { useState } from "react";
import styles from "../../styles/components/commons/Create.module.scss";
import Str from "../../utils/str";
import FormInput from "./FormInput";
import Input from "./Input";
import Title from "./Title"

type Props = {
    isBlog?: boolean,
    isWork?: boolean,
}

const Create = ({isBlog, isWork}: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
    };
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [markdown, setMarkdown] = useState("");

    return (
        <div className={Str.joinClassName(styles.create, "inner")}>
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