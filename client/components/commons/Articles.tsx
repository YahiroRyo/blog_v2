import { Article, ArticleWrapper } from "../../components/commons/Article";
import styles from "../../styles/components/commons/Articles.module.scss";
import Title from "../../components/commons/Title";
import Str from "../../utils/str";

const Articles = ({isBlog, isWork, isAdmin}: {isBlog?: boolean, isWork?: boolean, isAdmin?: boolean}) => {
    return (
        <>
            <div className={Str.joinClassName(styles.articles, "inner")}>
                <Title>{isBlog ? "ブログ" : isWork ? "実績" : ""}一覧</Title>
                <ArticleWrapper className={styles.articles__articleWrapper}>
                    <Article isBlog={isBlog} isWork={isWork} isAdmin={isAdmin} className={styles.articles__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaatestaaaaaaaatestaa\naaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaa\naaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaate\nstaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaa\natestaaaaa\naaat\nest\naaaaaaaatestaaaaaaaatesta\naaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaa\na"} createdAt={"2020/12/15"} />
                    <Article isBlog={isBlog} isWork={isWork} isAdmin={isAdmin} className={styles.articles__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
                    <Article isBlog={isBlog} isWork={isWork} isAdmin={isAdmin} className={styles.articles__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
                    <Article isBlog={isBlog} isWork={isWork} isAdmin={isAdmin} className={styles.articles__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
                </ArticleWrapper>
            </div>
        </>
    )
}

export default Articles;