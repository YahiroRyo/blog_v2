import { useRouter } from "next/router";
import {Article, ArticleWrapper} from "../../../components/commons/Article";
import styles from "../../../styles/pages/Blogs.module.scss";
import Title from "../../../components/commons/Title";
import Str from "../../../utils/str";

const Blogs = () => {
    const router = useRouter();
    const {pageNumber} = router.query;

    return (
        <div className={Str.joinClassName(styles.blogs, "inner")}>
            <Title>ブログ一覧</Title>
            <ArticleWrapper className={styles.blogs__articleWrapper}>
                <Article className={styles.blogs__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaatestaaaaaaaatestaa\naaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaa\naaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaate\nstaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaa\natestaaaaa\naaat\nest\naaaaaaaatestaaaaaaaatesta\naaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaa\na"} createdAt={"2020/12/15"} />
                <Article className={styles.blogs__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
                <Article className={styles.blogs__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
                <Article className={styles.blogs__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
            </ArticleWrapper>
        </div>
    )
}

export default Blogs;