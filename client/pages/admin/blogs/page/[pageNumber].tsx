import { useRouter } from "next/router";
import CommonMeta from "../../../../components/commons/CommonMeta";
import Articles from "../../../../components/commons/Articles";

const Blogs = () => {
    const router = useRouter();
    const {pageNumber} = router.query;

    return (
        <>
            <CommonMeta title="ブログ一覧" />
            <Articles isBlog={true} isAdmin={true} />
        </>
    )
}

export default Blogs;