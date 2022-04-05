import { useRouter } from "next/router";
import {Article, ArticleWrapper} from "../../../components/commons/Article";
import styles from "../../../styles/pages/Works.module.scss";
import Title from "../../../components/commons/Title";
import Str from "../../../utils/str";

const Works = () => {
    const router = useRouter();
    const {pageNumber} = router.query;

    return (
        <div className={Str.joinClassName(styles.works, "inner")}>
            <Title>実績一覧</Title>
            <ArticleWrapper className={styles.works__articleWrapper}>
                <Article className={styles.works__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaatestaaaaaaaatestaa\naaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaa\naaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaate\nstaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaa\natestaaaaa\naaat\nest\naaaaaaaatestaaaaaaaatesta\naaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaaatestaaaaaaa\na"} createdAt={"2020/12/15"} />
                <Article className={styles.works__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
                <Article className={styles.works__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
                <Article className={styles.works__articleWrapper__article} id={"11111"} title={"test"} description={"testaaaaaaaa"} createdAt={"2020/12/15"} />
            </ArticleWrapper>
        </div>
    )
}

export default Works;