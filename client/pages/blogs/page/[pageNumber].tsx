import { NextPage } from "next";
import CommonMeta from "../../../components/commons/CommonMeta";
import Articles from "../../../components/commons/Articles";

const Blogs: NextPage = () => {
    return (
        <>
            <CommonMeta title="ブログ一覧" />
            <Articles isBlog={true} />
        </>
    );
}

export default Blogs;