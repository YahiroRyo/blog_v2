import ReactMarkdown from "react-markdown";
import styles from "../../styles/components/commons/DetailArticle.module.scss";
import Image from "next/image";
import Head from "next/head";
import Str from "../../utils/str";

type Props = {
    title: string,
    description: string,
    contents: string,
    createdAt: string,
};

const DetailArticle = ({title, description, contents, createdAt}: Props) => {
    const getCreatedAt = () => {
        const date = new Date(createdAt);
        return `${date.getFullYear()}年 ${date.getMonth() + 1}月${date.getDate()}日`
    }
    
    return (
        <div className={Str.joinClassName(styles.markdown, "inner")}>
            <Head>
                <meta name="description" content={description} />
                <title>{title} | ヤッピー</title>
            </Head>
            <h1 className={styles.markdown__title}>{title}</h1>
            <span className={styles.markdown__date}>
                <div className={styles.markdown__date__icon}>
                    <Image src="/icons/clock-black.svg" layout="fill" alt="clock" loading="lazy"/>
                </div>
                <span className={styles.markdown__date__text}>{getCreatedAt()}</span>
            </span>
            <ReactMarkdown>
                    {contents}
            </ReactMarkdown>
        </div>
    )
}

export default DetailArticle;