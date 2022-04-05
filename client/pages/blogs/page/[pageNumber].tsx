import { useRouter } from "next/router";
import CommonMeta from "../../../components/commons/CommonMeta";
import Articles from "../../../components/commons/Articles";

const Blogs = () => {
    const router = useRouter();
    const {pageNumber} = router.query;
    let axiosPageNumber = parseInt(pageNumber as string);
    if (!axiosPageNumber) {
        axiosPageNumber = 1;
    }
    return (
        <>
            <CommonMeta title="ブログ一覧" />
            <Articles isBlog={true} />
        </>
    )
}

export default Blogs;