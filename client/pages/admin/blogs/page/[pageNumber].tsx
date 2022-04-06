import { NextPage } from "next";
import Articles from "../../../../components/commons/Articles";
import CommonMeta from "../../../../components/commons/CommonMeta";

const Blogs: NextPage = () => {
    return (
        <>
            <CommonMeta title="ブログ一覧" />
            <Articles isBlog={true} isAdmin={true} />
        </>
    )
}

export default Blogs;