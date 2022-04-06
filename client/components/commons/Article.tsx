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
    isBlog?: boolean;
    isWork?: boolean;
    isAdmin?: boolean;
    className?: string;
};
export const Article = ({id, title, description, createdAt, className, isAdmin, isBlog, isWork}: Props) => {
    let href = "";
    href += isAdmin ? "/admin" : ""
    href += isBlog ? "/blogs" : ""
    href += isWork ? "/works" : ""

    const getCreatedAt = () => {
        const date = new Date(createdAt);
        return `${date.getFullYear()}年 ${date.getMonth() + 1}月${date.getDate()}日`
    }
       
    
    return (
        <li className={className}>
            <Link href={`${href}/${id}`}>
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
                                <span>{getCreatedAt()}</span>
                            </div>
                        </div>
                    </article>
                </a>
            </Link>
        </li>
    )
}