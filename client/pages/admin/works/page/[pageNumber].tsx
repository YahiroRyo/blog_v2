import { useRouter } from "next/router";
import CommonMeta from "../../../../components/commons/CommonMeta";
import Articles from "../../../../components/commons/Articles";

const Works = () => {
    const router = useRouter();
    const {pageNumber} = router.query;

    return (
        <>
            <CommonMeta title="ブログ一覧" />
            <Articles isWork={true} isAdmin={true} />
        </>
    )
}

export default Works;