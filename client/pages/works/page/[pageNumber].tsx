import { NextPage } from "next";
import ArticleData from "../../../types/articleData";
import Articles from "../../../components/commons/Articles";
import CommonMeta from "../../../components/commons/CommonMeta";

const Works: NextPage = () => {
    return (
        <>
            <CommonMeta title="実績一覧" />
            <Articles isWork={true} />
        </>
    )
}

export default Works;