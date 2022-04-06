import { NextPage } from "next";
import Articles from "../../../../components/commons/Articles";
import CommonMeta from "../../../../components/commons/CommonMeta";

const Works: NextPage = () => {
    return (
        <>
            <CommonMeta title="ブログ一覧" />
            <Articles isWork={true} isAdmin={true} />
        </>
    )
}

export default Works