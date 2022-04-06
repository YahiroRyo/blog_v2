import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Input from "../../../components/commons/Input";
import axios from "axios";
import FormInput from "../../../components/commons/FormInput";
import styles from "../../../styles/pages/admin/ArticleForm.module.scss"
import Str from "../../../utils/str";

type Props = {
    title: string,
    description: string,
    contents: string,
    createdAt: string,
};

const Blog: NextPage<Props> = (props) => {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [markdown, setMarkdown] = useState(props.contents);
    const [msg, setMsg] = useState("");

    const {id} = useRouter().query;
    
    const editBlog = async() => {
        await axios.post(`${Str.apiUrl()}/admin/blogs/edit`, {
            id: id,
            title: title,
            description: description,
            contents: markdown,
        });
    }
    const deleteBlog = async() => {
        await axios.post(`${Str.apiUrl()}/admin/blogs/delete`, {
            id: id
        });
    }
    
    return (
        <div className={Str.joinClassName(styles.form, "inner")}>
            <Input className={styles.form__button} onClick={editBlog} type="button" id="edit">編集</Input>
            <Input className={styles.form__button} onClick={deleteBlog} type="button" id="delete">削除</Input>
            <form className={styles.form__inner} onSubmit={(e) => e.preventDefault()}>
                <FormInput className={styles.form__inner__input} value={title} name={"Title"} type={"text"} onChange={(e) => setTitle(e.target.value)} />
                <FormInput className={styles.form__inner__input} value={description} name={"Description"} type={"text"} onChange={(e) => setDescription(e.target.value)} />
                <FormInput className={styles.form__inner__input} value={markdown} name={"Markdown"} type={"textarea"} onChange={(e) => setMarkdown(e.target.value)} />
            </form>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let title = "";
    let description = "";
    let contents = "";
    let createdAt = "";
    
    const {id} = context.query;
    try {
        const response = await axios.get<{
            title: string,
            description: string,
            contents: string,
            created_at: string,
        }>(`${Str.apiUrl()}/blogs/${id}`);
        title = response.data.title;
        description = response.data.description;
        contents = response.data.contents;
        createdAt = response.data.created_at;
    } catch(e) {
    }
    
    return {
        props: {
            title: title,
            description: description,
            contents: contents,
            createdAt: createdAt,
        }
    }
}
export default Blog;