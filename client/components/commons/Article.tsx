import styles from "../../styles/components/commons/Article.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react"
import Str from "../../utils/str";

export const ArticleWrapper = ({children, className}: {children?: React.ReactNode, className?: string}) => {
    return <ul className={Str.joinClassName(styles.articleWrapper, className ? className : '')}>{children}</ul>
}

type Props = {
    id: string,
    title: string,
    description: string;
    createdAt: string;
    className?: string;
};
export const Article = ({id, title, description, createdAt, className}: Props) => {
    return (
        <li className={className}>
            <Link href={`/blogs/${id}`}>
                <a>
                    <article className={styles.article}>
                        <h1 className={styles.article__title}>{title}</h1>
                        <div className={styles.article__contents}>
                            <div className={styles.article__contents__description}>
                                <p className={styles.article__contents__description__text}>{description}</p>
                                <div className={styles.article__contents__description__gradation}></div>
                            </div>
                            <div className={styles.article__contents__createdAt}>
                                <div className={styles.article__contents__createdAt__icon}>
                                    <Image src="/icons/clock.svg" layout="fill" alt="clock" loading="lazy"/>
                                </div>
                                <span>{createdAt}</span>
                            </div>
                        </div>
                    </article>
                </a>
            </Link>
        </li>
    )
}
