import { Article, ArticleWrapper } from "../../components/commons/Article";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleData, { FetchArticles } from "../../types/articleData";
import axios from "axios";
import styles from "../../styles/components/commons/Articles.module.scss";
import Title from "../../components/commons/Title";
import Str from "../../utils/str";

type Props = {
    isBlog?: boolean;
    isWork?: boolean;
    isAdmin?: boolean;
}

const Articles = ({isBlog, isWork, isAdmin}: Props) => {
    const {pageNumber} = useRouter().query;
    let axiosPageNumber = parseInt(pageNumber as string);
    if (!axiosPageNumber) {
        axiosPageNumber = 1;
    }
    const [articleData, setArticleData] = useState<ArticleData[]>();
    const apiUrl = isBlog ? 'blogs' : 'works';
    
    useEffect(() => {
        const func = async () => {
            await new Promise(async (resolve, reject) => {
                try {
                    const response = await axios.get<FetchArticles>(`${Str.apiUrl()}/${apiUrl}/page/${axiosPageNumber}`);
                    setArticleData(response.data.data);
                    resolve(true);
                } catch(e) {
                    reject(false);
                }
            });
        }
        func();
    }, []);

    return (
        <>
            <div className={Str.joinClassName(styles.articles, "inner")}>
                <Title>{isBlog ? "ブログ" : isWork ? "実績" : ""}一覧</Title>
                <ArticleWrapper className={styles.articles__articleWrapper}>
                   {articleData ? articleData.map((data) =>
                        <Article
                            isBlog={isBlog}
                            isWork={isWork}
                            isAdmin={isAdmin}
                            className={styles.articles__articleWrapper__article}
                            id={data.id}
                            key={data.id}
                            title={data.title}
                            description={data.description}
                            createdAt={data.created_at}
                        />
                    ) : <></>}
                </ArticleWrapper>
            </div>
        </>
    )
}


export default Articles;